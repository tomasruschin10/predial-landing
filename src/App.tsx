import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Montaneses2400 from "./pages/Montaneses2400";
import Almagro from "./pages/Almagro";
import Departamentos34 from "./pages/Departamentos34";
import DepartamentosVenta from "./pages/DepartamentosVenta";
import Gracias from "./pages/Gracias";
import GraciasTasacion from "./pages/GraciasTasacion";
import NoGraciasTasacion from "./pages/NoGraciasTasacion";
import Tasacion from "./pages/Tasacion";
import TasacionMetaAds from "./pages/TasacionMetaAds";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emprendimiento/montaneses-2400" element={<Montaneses2400 />} />
          <Route path="/almagro" element={<Almagro />} />
          <Route path="/departamentos-3-4-ambientes" element={<Departamentos34 />} />
          <Route path="/departamentos-en-venta-caba" element={<DepartamentosVenta />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/gracias-tasacion" element={<GraciasTasacion />} />
          <Route path="/no-gracias-tasacion" element={<NoGraciasTasacion />} />
          <Route path="/tasacion" element={<Tasacion />} />
          <Route path="/tasacion-Meta-Ads" element={<TasacionMetaAds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
