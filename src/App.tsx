import { useState } from 'react';
import { Package } from 'lucide-react';
import { InventoryForm } from './components/InventoryForm';
import { InventoryDashboard } from './components/InventoryDashboard';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleItemAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Inventory Management System
              </h1>
              <p className="text-gray-600 mt-1">
                Track and manage your inventory with ease
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <InventoryForm onItemAdded={handleItemAdded} />
          <InventoryDashboard refreshTrigger={refreshTrigger} />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Inventory Management System - Powered by Supabase
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
