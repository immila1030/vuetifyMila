import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import Dashboard from '@/components/Dashboard.vue'; 
import Work from '@/components/Work.vue'; 
import Projects from '@/components/Projects.vue'; 
import Materials from '@/components/Materials.vue'; 
import Team from '@/components/Team.vue'; 
import Live from '@/components/Live.vue'; 
import Data from '@/components/Data.vue'; 
import Profile from '@/components/Profile.vue'; 

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: 'home' },
      { path: 'home', name: 'Dashboard', component: Dashboard },
      { path: 'work', name: 'Work', component: Work },
      { path: 'projects', name: 'Projects', component: Projects },
      { path: 'materials', name: 'Materials', component: Materials },
      { path: 'team', name: 'Team', component: Team },
      { path: 'live', name: 'Live', component: Live },
      { path: 'data', name: 'Data', component: Data },
      { path: 'profile', name: 'Profile', component: Profile }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
