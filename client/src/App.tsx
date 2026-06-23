import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PlaceholderPage from "./pages/PlaceholderPage";
import OurStory from "./pages/OurStory";
import Driveways from "./pages/services/Driveways";
import GaragesSheds from "./pages/services/GaragesSheds";
import Artisanal from "./pages/services/Artisanal";
import ScrollToTop from "./components/ScrollToTop";
import QuoteRequest from "./pages/QuoteRequest";
import ThankYou from "./pages/ThankYou";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      
      {/* Service Routes */}
      <Route path="/services/driveways" component={Driveways} />
      <Route path="/services/garages-sheds" component={GaragesSheds} />
      <Route path="/services/artisanal" component={Artisanal} />

      
      {/* Main Services Page (redirects to Driveways for now or acts as hub) */}
      <Route path="/services" component={Driveways} />
      
      <Route path="/story" component={OurStory} />
      
      <Route path="/contact">
        <PlaceholderPage 
          title="Contact Us" 
          description="Please email us at zac@theconcreteguyz.com.au or call 0428 726 123 for inquiries." 
        />
      </Route>

      <Route path="/quote" component={QuoteRequest} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </>
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
