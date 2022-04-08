import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MasterDetail.module.scss';
import MasterRequest from '../../components/master-detail/MasterRequest';
import MasterProfile from '../../components/master-detail/MasterProfile';
import MasterDetailNav from '../../components/master-detail/MasterDetailNav';
import MasterInfo from '../../components/master-detail/MasterInfo';
import MasterCategory from '../../components/master-detail/MasterCategory';
import MasterImage from '../../components/master-detail/MasterImage';
import MasterReview from '../../components/master-detail/MasterReview';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function MasterDetail() {
  const params = useParams();
  const [master, setMaster] = useState({});
  const masterInfo = useRef('');
  const masterMedia = useRef('');
  const masterReview = useRef('');

  //get master profile fetch
  useEffect(() => {
    fetch(`http://localhost:8000/master/users/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMaster(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.detailContainer}>
        <div className={styles.masterProfile}>
          <MasterProfile master={master} />
        </div>
        <div className={styles.pageNav}>
          <MasterDetailNav
            master={master}
            masterInfo={masterInfo}
            masterReview={masterReview}
            masterMedia={masterMedia}
          />
        </div>
        <div ref={masterInfo} className={styles.masterIntro}>
          <h2>한줄소개</h2>
          <div>{master.intro}</div>
        </div>
        <div className={styles.masterInfoContainer}>
          <MasterInfo master={master} masterInfo={masterInfo} />
        </div>
        <div className={styles.lessonCategory}>
          <div>
            <MasterCategory master={master} />
          </div>
        </div>
        <div ref={masterMedia} className={styles.masterImages}>
          <div>
            <MasterImage master={master} />
          </div>
        </div>
        <div ref={masterReview} className={styles.masterReview}>
          <div>
            <MasterReview master={master} />
          </div>
        </div>
      </div>
      <div className={styles.requestContainer}>
        <MasterRequest master={master} />
      </div>
      <Footer />
    </div>
  );
}

export default MasterDetail;