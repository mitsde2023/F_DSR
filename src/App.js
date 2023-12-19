import './App.css';
import { Routes, Route } from 'react-router-dom';
import CounselorWiseSummary from './dsr/CounselorWiseSummary';
// import OverallSummary from './dsr/OverallSummary';
import OverAllUsingDataTable from './dsr/OverAllUsingDataTable';
import TltmInd from './dsr/TltmInd';
import TltmExclude from './dsr/TltmExclude';
import GroupWise from './dsr/GroupWise';
import UploadComponent from './dsr/UploadComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CounselorWiseSummary />} />
        {/* <Route exact path="/overall" element={<OverallSummary />} /> */}
        <Route exact path="/overall" element={<OverAllUsingDataTable />} />
        <Route exact path="/tltm" element={<TltmInd />} />
        <Route exact path="/Excluding-TL" element={<TltmExclude />} />
        <Route exact path="/group-wise" element={<GroupWise />} />
        <Route exact path="/Data-Files" element={<UploadComponent />} />
      </Routes>
    </div>
  );
}

export default App;
