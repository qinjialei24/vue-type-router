<template>
  <div class="user-detail">
    <div class="detail-header">
      <div class="detail-icon">📊</div>
      <h2 class="detail-title">User Detail</h2>
    </div>

    <div class="detail-content">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">💰</div>
          <div class="stat-info">
            <div class="stat-value">2,543</div>
            <div class="stat-label">Total Orders</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⭐</div>
          <div class="stat-info">
            <div class="stat-value">4.8</div>
            <div class="stat-label">Rating</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">📅</div>
          <div class="stat-info">
            <div class="stat-value">2</div>
            <div class="stat-label">Years Active</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-info">
            <div class="stat-value">Gold</div>
            <div class="stat-label">Membership</div>
          </div>
        </div>
      </div>

      <div class="activity-section">
        <h3 class="section-title">📊 Recent Activity</h3>
        <div class="activity-list">
          <div class="activity-item">
            <div class="activity-dot"></div>
            <div class="activity-content">
              <div class="activity-title">Profile updated</div>
              <div class="activity-time">2 hours ago</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-dot"></div>
            <div class="activity-content">
              <div class="activity-title">Order #12345 completed</div>
              <div class="activity-time">1 day ago</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-dot"></div>
            <div class="activity-content">
              <div class="activity-title">Joined premium membership</div>
              <div class="activity-time">3 days ago</div>
            </div>
          </div>
        </div>
      </div>

      <div class="info-section">
        <div class="info-card">
          <div class="info-icon">📊</div>
          <div class="info-content">
            <h4>Detailed Analytics</h4>
            <p>
              This detail page shows how nested routes work within the typesafe
              router system. The route structure maintains type safety at every
              level.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// User detail logic would go here
</script>

<style scoped>
.user-detail {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
  margin-top: 1rem;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.detail-title {
  color: #f59e0b;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(245, 158, 11, 0.3);
}

.stat-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  font-weight: 500;
}

.activity-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  color: #22d3ee;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.activity-dot {
  width: 8px;
  height: 8px;
  background: #f59e0b;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-title {
  color: #d1d5db;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.activity-time {
  color: #9ca3af;
  font-size: 0.75rem;
}

.info-section {
  margin-top: 1rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-content h4 {
  color: #f59e0b;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.info-content p {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .detail-header {
    flex-direction: column;
    text-align: center;
  }

  .detail-title {
    font-size: 1.25rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-card {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
