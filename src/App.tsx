import Header from "./componets/header.tsx";
import {Route, Routes} from "react-router-dom";
import EX1_ListCourse from "./page/EX1_ListCourse.tsx";
import EX2_Calculation from "./page/EX2_Calculation.tsx";
import EX3_UserInfo  from "./page/EX3_UserInfo.tsx";
import EX4_ColorBox from "./page/EX4_ColorBox.tsx";
import EX5_FormatName from  "./page/EX5_FormatName.tsx"
import EX6_AdminIndex from "./page/EX6_AdminIndex.tsx";
import EX7_UserLayout from "./page/EX7_UserLayout.tsx";
import EX8_ListAccount from "./page/EX8_ListAccount.tsx";

function App() {

  return (
    <>
     <Header />
        <main>
            <Routes>
                <Route path="/ex1" element={<EX1_ListCourse />} />
                <Route path="/ex2" element={<EX2_Calculation />} />
                <Route path="/ex3" element={<EX3_UserInfo />} />
                <Route path="/ex4" element={<EX4_ColorBox/>} />
                <Route path="/ex5" element={<EX5_FormatName/>} />
                <Route path="/ex6" element={<EX6_AdminIndex/>} />
                <Route path="/ex7" element={<EX7_UserLayout/>} />
                <Route path="/ex8" element={<EX8_ListAccount/>} />


                <Route path="*" element={<h2>Trang không tồn tại</h2>} />
            </Routes>

        </main>
    </>
  )
}

export default App
