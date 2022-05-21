import React from 'react';
import Analysis from './components/Analysis/Analysis';
import Services from './components/Services/Services';
import Summary from './components/Summary/Summary';
import TopBanner from './components/Topbanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
    </div>
  );
}

export default App;
