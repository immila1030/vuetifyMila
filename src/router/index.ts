import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import UserDashboard from '@/components/UserDashboard.vue'; 
import UserWork from '@/components/UserWork.vue'; 
import UserProjects from '@/components/UserProjects.vue'; 
import MaterialList from '@/components/MaterialList.vue'; 
import UserTeam from '@/components/UserTeam.vue'; 
import LiveStreaming from '@/components/LiveStreaming.vue'; 
import UserData from '@/components/UserData.vue'; 
import UserProfile from '@/components/UserProfile.vue'; 

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: 'home' },
      { path: 'home', name: 'UserDashboard', component: UserDashboard },
      { path: 'work', name: 'UserWork', component: UserWork },
      { path: 'projects', name: 'UserProjects', component: UserProjects },
      { path: 'materials', name: 'MaterialList', component: MaterialList },
      { path: 'team', name: 'UserTeam', component: UserTeam },
      { path: 'live', name: 'LiveStreaming', component: LiveStreaming },
      { path: 'data', name: 'UserData', component: UserData },
      { path: 'profile', name: 'UserProfile', component: UserProfile }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
