/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ipaImage from "../Images/ipa.png";
import serverImage from "../Images/server.png";
import linuxImage from "../Images/linux.jpeg";
import qiitaImage from "../Images/qiita.png";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <section class="page-section" id="blog">
      <div class="container text-center">
        <h1 class="title">ブログ</h1>
        <hr />

        <p>記事の一部をピックアップしてます！</p>
        <p>他の記事はQiitaのページからアクセスください！</p>

        <div class="row">
          <div className="qiita-image">
            <Link to={"https://qiita.com/railgun-0402"}>
              <img src={qiitaImage} />
            </Link>
          </div>
          <hr />

          {/* ブログ1 */}
          <div class="col-md-4">
            <Link
              to={"https://qiita.com/railgun-0402/items/fdc7ef895ca59bcd8c75"}
            >
              <div className="link-image">
                <img src={ipaImage} />
              </div>
            </Link>
            <h4>【応用情報技術者】</h4>
            <h4>午後分野はどれを選ぶ？</h4>
          </div>

          {/* ブログ2 */}
          <div class="col-md-4 services">
            <Link
              to={"https://qiita.com/railgun-0402/items/c6b7df1f238228e25dd2"}
            >
              <div className="link-image">
                <img src={serverImage} />
              </div>
            </Link>
            <h4>【AWS】</h4>
            <h4>Apacheサーバを構築してみた！</h4>
          </div>

          {/* ブログ3 */}
          <div class="col-md-4 services">
            <Link
              to={"https://qiita.com/railgun-0402/items/b2ee8d06ea8395d0e26c"}
            >
              <div className="link-image">
                <img src={linuxImage} />
              </div>
            </Link>
            <h4>【AWS】</h4>
            <h4>AmazonLinux2023でWordpressを構築</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
