import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import StudentResources from "./pages/StudentResources";
import StudentClinic from "./pages/StudentClinic";
import Contact from "./pages/Contact";
import NewsEvents from "./pages/NewsEvents";
import NotFound from "./pages/NotFound";
import Balance from "./pages/Balance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-resources" element={<StudentResources />} />
          <Route path="/student-clinic" element={<StudentClinic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/balance" element={<Balance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
