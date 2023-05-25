import "./HomePage.css";
import picturRoomGirl from "./assets/Room - Girl Working.png";
import { useAuthContext } from "./core/contexts/AuthProvider";
import iconNum1 from "./assets/icon/icon-num1.png";
import iconNum2 from "./assets/icon/icon-num2.png";
import iconNum3 from "./assets/icon/icon-num3.png";
import iconNum4 from "./assets/icon/icon-num4.png";
import specificPage from "./assets/pageScreen/specific.png";
import overviewPage from "./assets/pageScreen/overview.png";

function HomePage() {
  const { token } = useAuthContext();

  return (
    <div>
      <div className="full-size">
        <div className="box">
          <p className="box-text1">
            This is a website that explores the design structure of each
            website.
          </p>
          <div class="box-description">
            <p className="box-text2">
              เว็บแอปพลิเคชั่นเพื่อรวบรวมข้อมูลการวางตำแหน่งโฆษณาสำหรับเว็บไซต์แต่ละประเภท
              โดยเรานำเว็บไซต์มาจากการจัดอันดับเว็บไซต์ที่มีผู้เข้าชมมากที่สุดอันดับที่
              1 ถึง 3 ในประเภทสื่อให้ความบันเทิง ข่าวสาร และสินค้าไอที
              ซึ่งผู้ใช้จะมีส่วนช่วยในการรวบรวมข้อมูลเพื่อหาตำแหน่งการวางโฆษณาจากการเลือกเว็บไซต์ที่ตนเข้าใช้งานเป็นประจำและทำการเลือกตำแหน่งโฆษณาที่ตนรู้สึกสะดุดตามากที่สุด
              เว็บไซต์จะทำการแสดงข้อมูลที่ผู้ใช้ทั้งหมดเลือกในรูปแบบของกราฟข้อมูล
              เพื่อให้ผู้ใช้นำข้อมูลไปพัฒนาเว็บไซต์ของตนให้ดียิ่งขึ้น
            </p>
          </div>
          <button type="button" class="btn btn-success" id="bt-start">
            Get Started
          </button>
        </div>
        <img src={picturRoomGirl} alt="Image" className="picture-roomGirl" />
      </div>

      <div class="box-content-home">
        <div className="head-text">
          <p>Steps to use</p>
        </div>

        <div className="card-grid-steps">
            <div className="card">
              <img src={iconNum1} alt="icon1" />
              <div className="card-content">
                <h3>Step 1</h3>
                <p>ผู้ใช้ใหม่ต้องทำการลงทะเบียนก่อนเข้าใช้งานเว็บไซต์ หากผู้ใช้มีบัญชีอยู่แล้วให้ทำการล็อกอินเพื่อเข้าใช้งาน<br/><br/>จากนั้นกดปุ่มเพื่อไปที่หน้า<br/>Types of websites</p>
              </div>
            </div>
            <div className="card">
              <img src={iconNum2} alt="icon2" />
              <div className="card-content">
                <h3>Step 2</h3>
                <p>
                  กดเข้าเว็บไซต์ที่ใช้งานประจำหรือ<br/>ที่ชอบการวางตำแหน่งโฆษณา<br/>
                  ตรงนี้ผู้ใช้ยังสามารถกดถูกใจเว็บไซต์ที่ชอบได้
                </p>
              </div>
            </div>
            <div className="card">
              <img src={iconNum3} alt="icon3" />
              <div className="card-content">
                <h3>Step 3</h3>
                <p>
                  ดูภาพการวางตำแหน่งโฆษณา จากนั้นกดปุ่มเพื่อเลือกตำแหน่งโฆษณาที่ถูกใจ
                </p>
              </div>
            </div>
            <div className="card">
              <img src={iconNum4} alt="icon3" />
              <div className="card-content">
                <h3>Step 4</h3>
                <p>
                  เว็บไซต์จะพาไปยังหน้าเลือกกราฟิกของโฆษณาตำแหน่งที่ผู้ใช้เลือก ดูภาพกราฟิกเพื่อเลือกรูปแบบที่ชอบ
                  สามารถแสดงความคิดเห็นเกี่ยวกับกราฟิกได้ อันดับสุดท้ายกดปุ่มเพื่อเลือกกราฟิกเป็นอันเสร็จสิ้น
                </p>
              </div>
            </div>
          </div>
      </div>

      <div className="head-text">
          <p>Summary graphs</p>
      </div>

      <div class="content-graph">
        <div class="content-graph-specific">
          <h3>Specific</h3>
          <p>แสดงข้อมูลแต่ละเว็บไซต์โดยเฉพาะ ได้แก่ ตำแหน่ง และ รูปแบบกราฟิกโฆษณา</p>
          <img src={specificPage} alt="specificPage" />
        </div>
        <div class="content-graph-overview">
          <h3>Overview</h3>
          <p>แสดงข้อมูลต่างๆจากการกดหัวใจของผู้ใช้ มีหัวข้อดังต่อไปนี้ ภาพรวม ประเภทเว็บไซต์ และ เพศ</p>
          <img src={overviewPage} alt="specificPage" />
        </div>
      </div>

      <div className="head-text">
          <p>Suggestion</p>
      </div>


    </div>
  );
}

export default HomePage;
