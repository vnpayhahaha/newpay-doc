<template>
  <div class="openapi-container">
    <!-- 基础信息卡片 -->
    <div class="api-card">
      <div class="card-header">
        <div class="api-title">
          <span :class="['api-method', methodClass]">{{ apiData.http_method.toUpperCase() }}</span>
          <div>
            <h1 class="api-name">{{ apiData.api_name }}</h1>
            <div class="api-uri">{{ apiData.api_uri }}</div>
          </div>
        </div>
        <div class="api-meta">
          <div class="meta-item">
            <i class="fas fa-bolt"></i>
            <span>状态: {{ apiData.status ? '启用' : '禁用' }}</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-tachometer-alt"></i>
            <span>速率限制: {{ apiData.rate_limit }} 次/分钟</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-lock"></i>
            <span>认证: {{ authModeText }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 接口描述部分 -->
    <h2 id="接口描述" class="section-header" tabindex="-1">
      接口描述
      <a class="header-anchor" href="#接口描述" aria-label="Permalink to &quot;接口描述&quot;">​</a>
    </h2>
    <div class="section-content">
      <p>{{ apiData.description }}</p>
    </div>

    <!-- 请求参数部分 -->
    <h2 id="请求参数" class="section-header" tabindex="-1">
      请求参数
      <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a>
    </h2>
    <div class="vp-table-wrapper">
      <table tabindex="0">
        <thead>
          <tr>
            <th>参数名</th>
            <th>类型</th>
            <th>必填</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="param in requestParams" :key="param.name">
            <td><code>{{ param.name }}</code></td>
            <td>{{ param.type }}</td>
            <td>
              <span :class="['required', param.required ? 'required-true' : 'required-false']">
                {{ param.required ? '是' : '否' }}
              </span>
            </td>
            <td>{{ param.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 请求示例部分 -->
    <h3 id="请求示例" class="section-header" tabindex="-1">
      请求示例
      <a class="header-anchor" href="#请求示例" aria-label="Permalink to &quot;请求示例&quot;">​</a>
    </h3>
    <div class="vp-doc">
      <div class="vp-code-block">
        <div class="language-json vp-adaptive-theme line-numbers-mode">
          <button title="Copy Code" class="copy" @click="copyCode(requestExample)"></button>
          <span class="lang">json</span>
          <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0">
            <code>{{ formatJson(requestExample) }}</code>
          </pre>
          <div class="line-numbers-wrapper" aria-hidden="true">
            <span v-for="line in requestExampleLines" :key="line" class="line-number">{{ line }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 响应参数部分 -->
    <h2 id="响应参数" class="section-header" tabindex="-1">
      响应参数
      <a class="header-anchor" href="#响应参数" aria-label="Permalink to &quot;响应参数&quot;">​</a>
    </h2>
    <div class="vp-table-wrapper">
      <table tabindex="0">
        <thead>
          <tr>
            <th>参数名</th>
            <th>类型</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="param in responseParams" :key="param.name">
            <td><code>{{ param.name }}</code></td>
            <td>{{ param.type }}</td>
            <td>{{ param.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 响应示例部分 -->
    <h3 id="响应示例" class="section-header" tabindex="-1">
      响应示例
      <a class="header-anchor" href="#响应示例" aria-label="Permalink to &quot;响应示例&quot;">​</a>
    </h3>
    <div class="vp-doc">
      <div class="vp-code-block">
        <div class="language-json vp-adaptive-theme line-numbers-mode">
          <button title="Copy Code" class="copy" @click="copyCode(responseExample)"></button>
          <span class="lang">json</span>
          <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0">
            <code>{{ formatJson(responseExample) }}</code>
          </pre>
          <div class="line-numbers-wrapper" aria-hidden="true">
            <span v-for="line in responseExampleLines" :key="line" class="line-number">{{ line }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 更新信息部分 -->
    <h2 id="更新信息" class="section-header" tabindex="-1">
      更新信息
      <a class="header-anchor" href="#更新信息" aria-label="Permalink to &quot;更新信息&quot;">​</a>
    </h2>
    <div class="update-info">
      <div class="meta-item">
        <i class="fas fa-calendar-plus"></i>
        <span>创建时间: {{ apiData.created_at }}</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-calendar-check"></i>
        <span>更新时间: {{ apiData.updated_at }}</span>
      </div>
    </div>

    <!-- 加载状态和错误处理 -->
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>正在获取 API 数据，请稍候...</p>
    </div>

    <div v-else-if="error" class="error-container">
      <p><i class="icon fas fa-exclamation-triangle"></i> {{ error }}</p>
      <button class="refresh-btn" @click="fetchApiData">
        <i class="fas fa-sync-alt"></i> 重新加载
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

// 定义请求参数接口
interface RequestParam {
  desc: string
  name: string
  type: string
  required: number
}

// 定义响应参数接口
interface ResponseParam {
  desc: string
  name: string
  type: string
}

// 定义API响应数据结构
interface ApiData {
  id: number
  api_name: string
  api_uri: string
  http_method: string
  request_params: string
  request_example: string
  response_params: string
  response_example: string
  description: string
  status: boolean
  rate_limit: number
  auth_mode: number
  created_at: string
  updated_at: string
}

// 组件状态
const loading = ref(true)
const error = ref<string | null>(null)
const apiData = ref<ApiData>({
  id: 0,
  api_name: '',
  api_uri: '',
  http_method: 'POST',
  request_params: '[]',
  request_example: '{}',
  response_params: '[]',
  response_example: '{}',
  description: '',
  status: false,
  rate_limit: 0,
  auth_mode: 1,
  created_at: '',
  updated_at: ''
})

// 计算属性
const methodClass = computed(() => {
  const method = apiData.value.http_method.toLowerCase()
  return `method-${method}`
})

const authModeText = computed(() => {
  switch(apiData.value.auth_mode) {
    case 0: return 'NONE'
    case 1: return 'MD5'
    case 2: return 'JWT'
    case 3: return 'AES'
    default: return '未指定'
  }
})

const requestParams = computed<RequestParam[]>(() => {
  try {
    return JSON.parse(apiData.value.request_params)
  } catch (e) {
    console.error('解析请求参数失败:', e)
    return []
  }
})

const responseParams = computed<ResponseParam[]>(() => {
  try {
    return JSON.parse(apiData.value.response_params)
  } catch (e) {
    console.error('解析响应参数失败:', e)
    return []
  }
})

const requestExample = computed(() => {
  try {
    return JSON.parse(apiData.value.request_example)
  } catch (e) {
    console.error('解析请求示例失败:', e)
    return {}
  }
})

const responseExample = computed(() => {
  try {
    return JSON.parse(apiData.value.response_example)
  } catch (e) {
    console.error('解析响应示例失败:', e)
    return {}
  }
})

const requestExampleLines = computed(() => {
  const jsonStr = JSON.stringify(requestExample.value, null, 2)
  return Array.from({ length: jsonStr.split('\n').length }, (_, i) => i + 1)
})

const responseExampleLines = computed(() => {
  const jsonStr = JSON.stringify(responseExample.value, null, 2)
  return Array.from({ length: jsonStr.split('\n').length }, (_, i) => i + 1)
})

// 格式化 JSON 显示
const formatJson = (json: any): string => {
  if (typeof json === 'string') {
    try {
      return JSON.stringify(JSON.parse(json), null, 2)
    } catch {
      return json
    }
  }
  return JSON.stringify(json, null, 2)
}

// 复制代码
const copyCode = (code: any) => {
  const text = typeof code === 'string' ? code : JSON.stringify(code, null, 2)
  navigator.clipboard.writeText(text)
    .then(() => {
      // 可以添加复制成功提示
      console.log('代码已复制')
    })
    .catch(err => {
      console.error('复制失败:', err)
    })
}

// 获取 API 数据
const fetchApiData = async () => {
  loading.value = true
  error.value = null
  
  try {
    // 实际 API 端点
    const response = await fetch('http://127.0.0.1:9501/common/api/collection_order_create')
    
    if (!response.ok) {
      throw new Error(`API 请求失败，状态码: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.success && data.data) {
      apiData.value = data.data
    } else {
      throw new Error(data.message || '获取 API 数据失败')
    }
  } catch (err) {
    error.value = `获取 API 数据失败: ${err instanceof Error ? err.message : String(err)}`
    console.error('API 请求错误:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchApiData()
})
</script>

<style scoped>
.openapi-container {
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
  transition: background-color 0.3s;
}

.api-card {
  background-color: var(--vp-c-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--vp-shadow-1);
  margin-bottom: 2rem;
  border: 1px solid var(--vp-c-divider);
}

.card-header {
  background: var(--vp-c-bg-soft);
  padding: 25px 30px;
  color: var(--vp-c-text-1);
  border-radius: 12px 12px 0 0;
}

.api-title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.api-method {
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  min-width: 80px;
  text-align: center;
  background-color: var(--vp-c-brand-light);
  color: white;
}

.method-get {
  background-color: #61affe;
}

.method-post {
  background-color: #49cc90;
}

.method-put {
  background-color: #fca130;
}

.method-delete {
  background-color: #f93e3e;
}

.method-patch {
  background-color: #50e3c2;
}

.api-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-brand);
}

.api-uri {
  font-size: 1.1rem;
  opacity: 0.9;
  font-family: monospace;
  margin-top: 5px;
  color: var(--vp-c-text-2);
}

.api-meta {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--vp-c-default-soft);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.section-header {
  position: relative;
  margin-top: 2rem;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.header-anchor {
  position: absolute;
  top: 0;
  left: -1.1rem;
  opacity: 0;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.25s;
}

.section-header:hover .header-anchor {
  opacity: 1;
}

.section-content {

  color: var(--vp-c-text-1);
  line-height: 1.7;
}

/* Vitepress 表格样式 */
.vp-table-wrapper {
  margin: 1rem 0;
  width: 100%;
  background-color: var(--vp-c-bg);

}

/* 表格基础样式 */
table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  table-layout: auto; /* 关键修改：使用自动布局 */
  margin: 0;
}

/* 表头样式 */
thead {
  background-color: var(--vp-c-bg-soft);
  position: sticky;
  left: 0;
}

/* 单元格通用样式 */
th, td {
  padding: 12px 16px;
  text-align: left;
  word-break: break-word;
  box-sizing: border-box;
  border-bottom: 1px solid var(--vp-c-divider);
}

/* 列宽优化 */
th:nth-child(1),
td:nth-child(1) {
  min-width: 160px; /* 参数名最小宽度 */
}

th:nth-child(2),
td:nth-child(2) {
  min-width: 100px; /* 类型最小宽度 */
  white-space: nowrap; /* 类型不换行 */
}

th:nth-child(3),
td:nth-child(3) {
  min-width: 80px; /* 必填最小宽度 */
  text-align: center; /* 居中显示必填状态 */
}

th:nth-child(4),
td:nth-child(4) {
  min-width: 200px; /* 描述最小宽度 */
}

/* 行悬停效果 */
tbody tr:hover {
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.3s;
}

/* 响应式表格 */
@media (max-width: 768px) {
  .vp-table-wrapper {
    border-radius: 6px;
  }

  th, td {
    padding: 8px 12px;
    font-size: 14px;
  }
  
  th:nth-child(1),
  td:nth-child(1) {
    min-width: 120px;
  }
  
  th:nth-child(4),
  td:nth-child(4) {
    min-width: 150px;
  }
}

.required {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

.required-true {
  background: var(--vp-c-green-dimm-1);
  color: var(--vp-c-green);
}

.required-false {
  background: var(--vp-c-yellow-dimm-1);
  color: var(--vp-c-yellow);
}

/* Vitepress 代码块样式 - 修复显示问题 */
.vp-code-group {
  margin: 16px 0;
  background-color: var(--vp-code-block-bg);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.language-json {
  position: relative;
}

.copy {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  border: 1px solid var(--vp-code-copy-code-border-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-copy-code-bg);
  opacity: 0.8;
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: opacity 0.25s;
}

.copy:hover {
  opacity: 1;
  border-color: var(--vp-code-copy-code-hover-border-color);
}

.lang {
  position: absolute;
  top: 6px;
  right: 50px;
  z-index: 2;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-dark-3);
  background-color: var(--vp-c-bg-soft);
  padding: 4px 8px;
  border-radius: 4px;
}

.shiki {
  padding: 16px 20px;
  margin: 0;
  overflow-x: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.5;
  white-space: pre;
  background: transparent;
  color: var(--vp-c-text-code);
  display: block;
}

/* 修复代码块显示问题 */
pre.shiki {
  margin: 0;
  padding: 16px 20px;
  overflow: auto;
}

/* 修复行号显示 */
.line-numbers-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  padding: 16px 4px;
  text-align: right;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-dark-3);
  font-family: var(--vp-font-family-mono);
  line-height: 1.5;
  user-select: none;
}

.line-number {
  display: block;
}

/* 确保代码内容可显示 */
.vp-code code {
  display: block;
  padding: 0;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  margin: 2rem 0;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid var(--vp-c-brand-light);
  border-top: 5px solid var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

.error-container {
  background: var(--vp-c-red-dimm-1);
  color: var(--vp-c-red);
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin: 2rem 0;
}

.refresh-btn {
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-dark));
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px auto 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.refresh-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.update-info {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.update-info .meta-item {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .card-header {
    padding: 20px;
  }
  
  .api-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .api-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .api-name {
    font-size: 1.5rem;
  }
  
  .section-header {
    font-size: 1.3rem;
  }
  
  th,
  td {
    padding: 8px 12px;
    font-size: 14px;
  }
  
  .vp-code-group {
    margin: 10px 0;
  }
  
  .shiki {
    padding: 12px 16px;
    font-size: 13px;
  }
}

.vp-doc {
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

</style>