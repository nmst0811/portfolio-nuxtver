<template>
  <div>
    <header>
      <h1 class="headline">
        <a>minenaの部屋</a>
      </h1>
      <ul class="nav-list">
        <li class="nav-list-item"><a href="#About">About me</a></li>
        <li class="nav-list-item"><a href="#Works">Works</a></li>
        <li class="nav-list-item"><a href="https://nmst0811.github.io/TryToNuxt/">Article</a></li>
        <li class="nav-list-item"><a href="#Contact">Contact</a></li>
      </ul>
    </header>

    <div id="contents">
      <!-- About -->
      <section id="About">
        <h2 class="About">About</h2>
        <p>
          Name:minena<br>
          大阪公立大学工業高等専門学校 在学中<br>
          3年知能情報コース / 17歳<br>
          学友会執行部 / 汽車倶楽部 / MikuIT / ボカロ紅白歌合戦 所属<br>
          (2025年7月現在)
        </p>
      </section>

      <hr>

      <!-- Skills -->
      <section id="Skills">
        <h2>Skills</h2>
        <div class="skills-images">
          <a id="html5" href="/images/Skills/HTML5.png" data-lightbox="skills" data-title="HTML5:授業・独学で習った程度">
            <img src="/images/Skills/HTML5.png" alt="HTML5" width="150">
          </a>
          <a id="css3" href="/images/Skills/CSS3.png" data-lightbox="skills" data-title="CSS3:授業・独学で習った程度">
            <img src="/images/Skills/CSS3.png" alt="CSS3" width="150">
          </a>
          <a id="javascript" href="/images/Skills/JavaScript.png" data-lightbox="skills" data-title="JavaScript:独学で理解できる程度">
            <img src="/images/Skills/JavaScript.png" alt="JavaScript" width="150">
          </a>
          <a id="python" href="/images/Skills/Python.png" data-lightbox="skills" data-title="Python:授業で習った程度">
            <img src="/images/Skills/Python.png" alt="Python" width="150">
          </a>
          <a id="Arduino" href="/images/Skills/Arduino.png"  data-lightbox="skills" data-title="Arduino:授業で習った程度">
            <img src="/images/Skills/Arduino.png" alt="" width="150">
          </a>
          <a id="Git" href="/images/Skills/Git.png"  data-lightbox="skills" data-title="Git:授業で習った程度">
            <img src="/images/Skills/Git.png" alt="" width="150">
          </a>
          <a id="Git" href="/images/Skills/GitHub.png"  data-lightbox="skills" data-title="GitHub:授業で習った程度">
            <img src="/images/Skills/GitHub.png" alt="" width="150">
          </a>
          <a id="tinkercad" href="/images/Skills/tinkercad.png"  data-lightbox="skills" data-title="tinkercad:授業で習った程度">
            <img src="/images/Skills/tinkercad.png" alt="" width="150">
          </a>
        </div>

        <div class="cp_qa01">
          <div class="cp_actab">
            <input id="cp_tabfour011" type="checkbox" name="tabs">
            <label for="cp_tabfour011">Others</label>
            <div class="cp_actab-content">
              <p>以下は趣味でやっていることです。ここに記載しているものはある程度人に教えることができます。</p>
              <a id="fusion" href="/images/Skills/fusion.png" data-lightbox="skills-other" data-title="fusion:ポリゴンのモデリングの代用で利用しています。">
                <img src="/images/Skills/fusion.png" alt="fusion" width="150">
              </a>
              <!-- 他の趣味スキルも同様に続く -->
            </div>
          </div>
        </div>
      </section>

      <hr>

      <!-- Works -->
      <section id="Works">
        <h2>Works</h2>
        <ul>
          <li><a href="https://colab.research.google.com/drive/1aQfIRkB5sl9S3uFi-EicKkGd39ZIZvpA?usp=sharing">｢Pythonで曲を奏でよう｣</a></li>
          <li><a href="https://yurei0903.github.io/power2_7-4-main/">2⁷-4「クイズリバーシ」</a></li>
        </ul>
        <a href="/images/Works/quizreversi_01.png" data-lightbox="works"><img src="/images/Works/quizreversi_01.png" alt="" width="300"></a>
        <a href="/images/Works/quizreversi_02.png" data-lightbox="works"><img src="/images/Works/quizreversi_02.png" alt="" width="300"></a>
      </section>

      <hr>

      <!-- Links -->
      <section id="Links">
        <h2>Links</h2>
        <ul>
          <li><a href="https://x.com/omuct_gakuyukai">学友会執行部 公式X(旧Twitter)</a></li>
          <li><a href="https://twitter.com/ClubKisya">汽車倶楽部 公式X(旧Twitter)</a></li>
          <li><a href="https://x.com/MikuITech">MikuIT 公式X(旧Twitter)</a></li>
        </ul>
      </section>

      <hr>

      <!-- Contact -->
      <section id="Contact">
        <h2>Contact</h2>
        <p>
          rj23098g[at]st.omu.ac.jp または
          rj23098g[at]yahoo.co.jpにご連絡ください。<br>
          ([at]を@に置き換えてください)
        </p>
      </section>
    </div>

    <footer class="footer02">
      <ul class="menu">
        <li><a href="#About">About me</a></li>
        <li><a href="#Works">Works</a></li>
        <li><a href="https://nmst0811.github.io/TryToNuxt/">Article</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <p class="copyright">&copy; minena/Umamimi</p>
    </footer>
  </div>
</template>
