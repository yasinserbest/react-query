import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeroes from "./components/SuperHeroes";
import { RQSuperHero } from "./components/RQSuperHero";
import { ParallelQueries } from "./components/ParallelQuaries";
import { DynamicParallel } from "./components/DynamicParallel";
import { DependentQueries } from "./components/DependentQueries";
import { PaginatedQueries } from "./components/PaginatedQueriesPage";
import { InfiniteQueries } from "./components/InfiniteQueries";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/rq-infinite">
              <InfiniteQueries />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueries />
            </Route>
            <Route path="/rq-dependent">
              <DependentQueries email="vishwas@example.com" />
            </Route>
            <Route path="/rq-dynamic-parallel">
              <DynamicParallel heroIds={[1, 3]} />
            </Route>
            <Route path="/rq-parallel">
              <ParallelQueries />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHero />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroes />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroes />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
