<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">🧪 Demo Playground</h1>
      <p class="demo-subtitle">Interactive examples and code snippets</p>
    </div>

    <div class="demo-content">
      <div class="demo-section">
        <h2 class="section-title">📝 Code Examples</h2>
        <div class="code-examples">
          <div class="code-block">
            <div class="code-header">
              <span class="code-title">Creating a typesafe route</span>
              <span class="code-lang">TypeScript</span>
            </div>
            <pre
              class="code-content"
            ><code>import { create } from 'vue-typesafe-router'

export const userRoute = create({
  path: '/user/:id',
  component: UserComponent
}).defineQuery<{ tab?: string }>()</code></pre>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-title">Type-safe navigation</span>
              <span class="code-lang">TypeScript</span>
            </div>
            <pre class="code-content"><code>// Navigate with full type safety
userRoute.push({
  params: { id: '123' },
  query: { tab: 'profile' }
})

// Get typed parameters
const params = userRoute.getParams() // { id: string }
const query = userRoute.getQuery()   // { tab?: string }</code></pre>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2 class="section-title">✨ Interactive Demo</h2>
        <div class="interactive-demo">
          <div class="demo-card">
            <div class="demo-icon">🚀</div>
            <h3>Try the Navigation</h3>
            <p>
              Click on the navigation links in the header to see type-safe
              routing in action.
            </p>
          </div>
          <div class="demo-card">
            <div class="demo-icon">🔍</div>
            <h3>Inspect Types</h3>
            <p>
              Open your browser's dev tools and check the TypeScript
              intellisense in your IDE.
            </p>
          </div>
          <div class="demo-card">
            <div class="demo-icon">⚙️</div>
            <h3>Modify Parameters</h3>
            <p>
              Try changing the route parameters and see how TypeScript catches
              type errors.
            </p>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2 class="section-title">📊 Benefits</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">✅</div>
            <div class="benefit-content">
              <h4>Compile-time Safety</h4>
              <p>Catch routing errors before they reach production</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">⚡</div>
            <div class="benefit-content">
              <h4>Zero Runtime Cost</h4>
              <p>No additional bundle size or performance impact</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">📝</div>
            <div class="benefit-content">
              <h4>IntelliSense Support</h4>
              <p>Full autocomplete and type checking in your IDE</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🔄</div>
            <div class="benefit-content">
              <h4>Easy Migration</h4>
              <p>Drop-in replacement for existing vue-router code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-page {
  min-height: 80vh;
}

.demo-header {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.demo-subtitle {
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 500px;
  margin: 0 auto;
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.demo-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-examples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.code-block {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-title {
  font-weight: 600;
  color: #d1d5db;
}

.code-lang {
  font-size: 0.75rem;
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.code-content {
  padding: 1.5rem;
  color: #e5e7eb;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
  overflow-x: auto;
}

.interactive-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.demo-card:hover {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.demo-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.demo-card h3 {
  color: #60a5fa;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.demo-card p {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(96, 165, 250, 0.3);
}

.benefit-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.benefit-content h4 {
  color: #60a5fa;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.benefit-content p {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .demo-title {
    font-size: 2rem;
  }

  .interactive-demo {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .code-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
