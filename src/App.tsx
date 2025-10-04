import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Quality from "./pages/Quality";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

// Product Pages
import BrassElectricalTerminalParts from "./pages/products/BrassElectricalTerminalParts";
import BrassCrossDiamondKnurlingInserts from "./pages/products/BrassCrossDiamondKnurlingInserts";
import PreciseKnurlingInserts from "./pages/products/PreciseKnurlingInserts";
import BrassHexBody from "./pages/products/BrassHexBody";
import BrassSpecialHexInserts from "./pages/products/BrassSpecialHexInserts";
import BrassNickelPlatedTerminal from "./pages/products/BrassNickelPlatedTerminal";
import BrassForgingComponents from "./pages/products/BrassForgingComponents";
import BrassHexCriticalNptThread from "./pages/products/BrassHexCriticalNptThread";
import BrassSensorTemperatureBody from "./pages/products/BrassSensorTemperatureBody";
import BrassRivets from "./pages/products/BrassRivets";
import BrassPinMoldingInserts from "./pages/products/BrassPinMoldingInserts";
import ProductDetail from "./pages/products/ProductDetailTemplate";

const queryClient = new QueryClient();

const App = () => {
  // Initialize smooth scroll with custom options for better transitions
  useSmoothScroll({
    offset: 50,
    duration: 1200,
    easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  });
  
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<Quality />} />
          
          {/* Product Routes - Specific routes first */}
          <Route path="/products/brass-electrical-terminal-parts" element={<BrassElectricalTerminalParts />} />
          <Route path="/products/brass-cross-diamond-knurling-inserts" element={<BrassCrossDiamondKnurlingInserts />} />
          <Route path="/products/precise-knurling-inserts" element={<PreciseKnurlingInserts />} />
          <Route path="/products/brass-hex-body" element={<BrassHexBody />} />
          <Route path="/products/brass-special-hex-inserts" element={<BrassSpecialHexInserts />} />
          <Route path="/products/brass-nickel-plated-terminal" element={<BrassNickelPlatedTerminal />} />
          <Route path="/products/brass-forging-components" element={<BrassForgingComponents />} />
          <Route path="/products/brass-hex-critical-npt-thread" element={<BrassHexCriticalNptThread />} />
          <Route path="/products/brass-sensor-temperature-body" element={<BrassSensorTemperatureBody />} />
          <Route path="/products/brass-rivets" element={<BrassRivets />} />
          <Route path="/products/brass-pin-molding-inserts" element={<BrassPinMoldingInserts />} />
          
          {/* Generic product route as fallback */}
          <Route path="/products/:productId" element={<ProductDetail />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
