import React, { useEffect, useState } from "react";
import "./GraphPage.css";
import { useAuthContext } from "./core/contexts/AuthProvider";
import { useNavigate } from "react-router";
import BarAllLike from "./components/BarChart/BarAllLike";
import BarMaleLike from "./components/BarChart/BarMaleLike";
import BarFemaleLike from "./components/BarChart/BarFemaleLike";
import BarOtherLike from "./components/BarChart/BarOtherLike";
import BarTypePortalLike from "./components/BarChart/BarTypePortalLike";
import BarTypeNewLike from "./components/BarChart/BarTypeNewLike";
import BarTypeBusinessLike from "./components/BarChart/BarTypeBusinessLike";
import { BrandAPI } from "./apis/brandAPI";
import { UserAPI, testLoading } from "./apis/userAPI";
// import { data } from'./components/data.json'
import { Link } from 'react-router-dom';
import { Container } from "@material-ui/core";
import { baseImageUrl } from "./core/store/localVariable";

function PageGraph() {
  const { token, loadingAction } = useAuthContext();
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([])
  const [brands, setBrands] = useState([])

  if (!token) {
    navigate("/login");
  }

  const [viewGraph, setGraph] = useState("overview");
  const [mode, setMode] = useState("specific")

  useEffect(() => {
    const setup = () => {
      loadingAction.onLoading(true)
      BrandAPI.getAll().then((res) => {
        console.log(res)
        setBrands(res)
        UserAPI.getAll().then((resUser) => {
          setAllUser(resUser)
          loadingAction.onLoading(false)
        })
      })
      
    }

    setup()
  }, [])

  const onSelectBrandHandle = (brand) => {
    navigate("/graphposition", { state: { brand: brand } })
  }

  const renderFilterOverview = () => {
    if (mode == 'overview') {
      return <div className="graphPage">
        <select
          id="viewGraph"
          value={viewGraph}
          onChange={(e) => setGraph(e.target.value)}
        >
          <option key={"overview"} value="overview">OVERVIEW</option>
          <option key={"type"} value="type">TYPE</option>
          <option key={"sex"} value="sex">SEX</option>
        </select>
      </div>

    }
  }

  const textDescription = () => {
    if (mode ==  'overview') {
      return <div>
        <p className='text-description'>Displays aggregated data from the user's selection of ad placements on the website page. The data is broken down into Show Overview, Show By Site Type, and Show By User Gender.</p>
      </div>

    }
  }

  const renderOverviewGraph = () => {
    switch (viewGraph) {
      case 'overview':
        return <BarAllLike data={brands} />
      case 'type':
        return <div className="filter-type">
          <BarTypePortalLike data={brands} />

          <BarTypeNewLike data={brands} />

          <BarTypeBusinessLike data={brands} />
        </div>
      case 'sex':
        return <>
          <BarMaleLike data={brands} allUser={allUser} />

          <BarFemaleLike data={brands} allUser={allUser} />

          <BarOtherLike data={brands} allUser={allUser} />
        </>
      default:
        break;
    }
  }

  const renderPageContent = () => {
    switch (mode) {
      case 'specific':
        return <div className="card-graph">
        <div className="card-grid">
          {brands.map((item, index) => (
            <div className="card-container-graph" key={index}>
              <div onClick={() => onSelectBrandHandle(item)} className="product-card">
                <img src={baseImageUrl+item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
      case 'overview':
        return renderOverviewGraph()
      default:
        break;
    }
  }

  return (
    <div>
      <p className="text-head">Graph</p>
      {textDescription()}
      <div className="bt-graph">
        <button type="button" onClick={() => setMode('specific')} className={`btn ${mode == 'specific' ? 'btn-dark' : 'btn-outline-dark'}`}>
          SPECIFIC
        </button>
        <button type="button" onClick={() => setMode('overview')} className={`btn ${mode == 'overview' ? 'btn-dark' : 'btn-outline-dark'}`}>
          OVERVIEW
        </button>
      </div>

      {renderFilterOverview()}

      {renderPageContent()}
    </div>
  );
}

export default PageGraph;
