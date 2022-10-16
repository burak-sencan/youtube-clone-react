import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </BrowserRouter>
);

export default App;
