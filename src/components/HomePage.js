/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import reactImage from "../Images/react.png";
import flutterImage from "../Images/flutter.png";
import profileImage from "../Images/mameshiba.png";
import typescriptImage from "../Images/Typescript.png";
import awsImage from "../Images/aws.png";
import pythonImage from "../Images/python.png";
import laravelImage from "../Images/laravel.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>D.Sugawara</h1>

      <img src={profileImage} className="profileImage" />

      <p>初めまして！</p>
      <p>ご閲覧いただきありがとうございます。菅原と申します！</p>
      <p>ここでは経歴書以外の情報(副業やブログ等)を記載しています。</p>

      <p>
        副業についての情報は本ページ下部へ、ブログについてはヘッダーの「ブログ」を押下してください！
      </p>
      <hr />

      {/* ポートフォリオ一覧 */}
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
            <h6 class="section-subheading text-muted mb-5">
              ※アイコンを押下するとページが移動します
            </h6>
          </div>

          <div class="row text-center">
            {/* Githubスキルページ */}
            <div class="col-md-4">
              <Link to={"https://musical-sunburst-abdcbe.netlify.app/"}>
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-code fa-stack-1x fa-inverse"></i>
                </span>
              </Link>
              <h4 class="my-3">スキル詳細サイト</h4>
              <p class="text-muted">Githubアカウントでこれまで書いてきた</p>
              <p class="text-muted">
                プログラミング言語をリスト表示してみました！
              </p>
            </div>
            {/* Coming Soon! */}
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Coming Soon!</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            {/* Coming Soon! */}
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Coming Soon!</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactが得意です。</p>
              <p>本ポートフォリオもReactで作成しています！</p>
            </div>
            <div class="col-md-4 services">
              <img src={typescriptImage} />
              <h4>TypeScript</h4>
              <p>TypeScriptの開発経験やレビュー経験があります。</p>
              <p>もちろんJavaScriptでの開発も可能です！</p>
            </div>
            <div class="col-md-4 services">
              <img src={awsImage} />
              <h4>AWS</h4>
              <p>AWS上でWeb開発や構築/運用の経験があります。</p>
              <p>アソシエイトの資格も複数所有！</p>
            </div>
            <div class="col-md-4 services">
              <img src={flutterImage} />
              <h4>Flutter</h4>
              <p>モバイルアプリの開発経験もあります。</p>
              <p>KotlinやSwiftの開発も対応可能です！</p>
            </div>
            <div class="col-md-4 services">
              <img src={pythonImage} />
              <h4>python</h4>
              <p>Djangoを使用した開発経験があります。</p>
              <p>Seleniumなどを使用し、RPA開発も経験有！</p>
            </div>
            <div class="col-md-4 services">
              <img src={laravelImage} />
              <h4>Laravel</h4>
              <p>Laravelを使用した開発経験があります。</p>
              <p>副業でのWeb経験はLaravelが多いです！</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
