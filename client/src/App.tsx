import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PlaceholderPage from "./pages/PlaceholderPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      
      <Route path="/services">
        <PlaceholderPage 
          title="Our Services" 
          description="Detailed information about our residential, commercial, and artisanal concrete services is coming soon. For now, please view our portfolio or contact us for a quote." 
        />
      </Route>
      
      <Route path="/story">
        <PlaceholderPage 
          title="Our Story" 
          description="The 40+ year history of The Concrete Guyz is being documented. Check back soon to learn about our family legacy and commitment to Canberra." 
        />
      </Route>
      
      <Route path="/contact">
        <PlaceholderPage 
          title="Contact Us" 
          description="Our contact form is under construction. Please email us at info@theconcreteguyz.com.au or call 0400 000 000 for inquiries." 
        />
      </Route>

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
