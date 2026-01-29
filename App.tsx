
import React, { useState, useEffect } from 'react';
import SelectionScreen from './components/SelectionScreen';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ActivitiesPage from './pages/Activities';
import Investment from './pages/Investment';
import Support from './pages/Support';
import Institutional from './pages/Institutional';
import Gallery from './pages/Gallery';
import { CondoType } from './types';

const App: React.FC = () => {
  const [selectedCondo, setSelectedCondo] = useState<CondoType | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectCondo = (condo: CondoType) => {
    setSelectedCondo(condo);
    setCurrentPage('home');
    setIsDrawerOpen(false);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!selectedCondo) {
    return <SelectionScreen onSelect={handleSelectCondo} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home condoType={selectedCondo} onNavigate={navigateTo} />;
      case 'galeria':
        return <Gallery condoType={selectedCondo} />;
      case 'catalogo':
        return <Catalog condoType={selectedCondo} />;
      case 'atividades':
        return <ActivitiesPage condoType={selectedCondo} category="natureza" />;
      case 'lazer':
        return <ActivitiesPage condoType={selectedCondo} category="lazer" />;
      case 'conveniencia':
        return <ActivitiesPage condoType={selectedCondo} category="conveniencia" />;
      case 'investimento':
        return <Investment condoType={selectedCondo} />;
      case 'suporte':
        return <Support condoType={selectedCondo} />;
      case 'institucional':
        return <Institutional condoType={selectedCondo} />;
      default:
        return <Home condoType={selectedCondo} onNavigate={navigateTo} />;
    }
  };

  return (
    <Layout
      condoType={selectedCondo}
      currentPage={currentPage}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      onNavigate={navigateTo}
      onChangeCondo={() => setSelectedCondo(null)}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;
