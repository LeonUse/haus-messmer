import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Home';
import { PensionOverview } from './pages/pension/PensionOverview';
import { RoomsList } from './pages/pension/RoomsList';
import { RoomDetail } from './pages/pension/RoomDetail';
import { PraxisOverview } from './pages/praxis/PraxisOverview';
import { ServicesList } from './pages/praxis/ServicesList';
import { ServiceDetail } from './pages/praxis/ServiceDetail';
import { Appointment } from './pages/praxis/Appointment';
import { Contact } from './pages/Contact';
import { Imprint } from './pages/Imprint';
import { Privacy } from './pages/Privacy';
import { PATH_ROOT, PATH_PENSION, PATH_PRAXIS, PATH_PAGE } from './routes/paths';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path={PATH_ROOT} element={<HomePage />} />
        
        {/* Pension Routes */}
        <Route path={PATH_PENSION.root} element={<PensionOverview />} />
        <Route path={PATH_PENSION.rooms} element={<RoomsList />} />
        <Route path={`${PATH_PENSION.rooms}/:id`} element={<RoomDetail />} />
        
        {/* Praxis Routes */}
        <Route path={PATH_PRAXIS.root} element={<PraxisOverview />} />
        <Route path={PATH_PRAXIS.services} element={<ServicesList />} />
        <Route path={`${PATH_PRAXIS.services}/:key`} element={<ServiceDetail />} />
        <Route path={PATH_PRAXIS.appointment} element={<Appointment />} />
        
        {/* Legal Pages */}
        <Route path={PATH_PAGE.contact} element={<Contact />} />
        <Route path={PATH_PAGE.imprint} element={<Imprint />} />
        <Route path={PATH_PAGE.privacy} element={<Privacy />} />
      </Routes>
    </Layout>
  );
}

export default App;
