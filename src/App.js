import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App mainbackground dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;