<template>
  <section>
    <div id="section01" class="pane hello">
      <div class="wrapper">
        <h1 data-wow-duration="0.35s" class="wow slideInDown">Hello</h1>
        <img src="/images/profilepic.jpg" alt="">
        <h3 data-wow-duration="0.35s" data-wow-delay="0.35s" class="wow slideInRight">I'm Scott</h3>
        <p data-wow-duration="0.35s" data-wow-delay="0.35s" class="wow slideInRight">Musician, developer, expert yodeler, and seasoned air drummer. I develop web sites, produce and mix sounds, and slappa da bass. I use to be in some bands, but now I create stuff with a mouse and a keyboard</p>
        <p>(go ahead..scroll on)</p>
        <a href="#section02" data-wow-delay=".01s" class="next wow bounceInUp">NEXT</a>
      </div>
    </div>
    <div id="section02" class="pane skills">
      <div class="wrapper"><a href="#section01" class="prev">PREV</a>
        <h1 class="wow fadeIn">Skills to pay some bills...
        </h1>
         <div class="boxWrap cf">
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s">
              <h3>HTML</h3>
                  <p>HTML5 + CSS3 = my bread and butter</p>
            </a>
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s">
              <h3>Languages</h3>
                  <p>Javascript</p>
                  <p>PHP</p>
                  <p>Python</p>
            </a>
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s">
              <h3>Frameworks</h3>
                  <p>React / Backbone / Angular / Vue / yadayadayada</p>
            </a>

            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s">
              <h3>UI</h3>
                  <p>Photoshop + Fireworks + Illustrator</p>
            </a>
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s">
              <h3>The required biz stuff</h3>
                      <p>GIT / SVN</p>
                      <p>Agile</p>
                      <p>Scrummy scrum</p>
            </a>
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s">
              <h3>(currently learning)</h3>
                      <p>Sails JS</p>
                      <p></p>
            </a>
          </div>
        <a href="#section03" data-wow-delay=".02s" class="next wow bounceInUp">NEXT</a>
      </div>
    </div>
    <div id="section03" class="pane types">
      <div class="wrapper"><a href="#section02" class="prev">PREV</a>
                <h1 class="wow fadeIn">Some stuff I did
                </h1>
          <div class="boxWrap cf">
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s" href="http://www.warners.com/" target="_blank">
              <h3>Warners</h3>
                  <p>Marketing site made while on contract with Phillips-Van Heusen</p>
            </a>
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s" href="http://www.vanheusen.com/" target="_blank">
              <h3>Van Heusen</h3>
                  <p>Responsive web site for "The #1 Dress Shirt Brand"(Load on phone for mobile site)</p>
            </a>

            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s" href="http://www.duffysmvp.com" target="_blank">
              <h3>Duffys</h3>
                  <p>Duffy's is a popular Florida chain / sports bar / grill. They needed a web site. We made them one.</p>
            </a>
            <a class="wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s" href="http://www.leapcp.com" target="_blank">
              <h3>LEAP</h3>
                  <p>Innovative financial management and wealth creation system (The software, not the site)</p>
            </a>

            <a class="wraps wow fadeIn box" data-wow-duration="0.25s" data-wow-delay="0.15s" href="http://www.greatwraps.com" target="_blank">
              <h3>Great Wraps</h3>
                  <p>**NOTE - this site has since been updated by - NOT me** Responsive web site with custom cms for a nationwide quick-dining franchise</p>
            </a>
          </div>
          <a href="#section04" data-wow-delay=".02s" class="next wow bounceInUp">NEXT</a>
      </div>
    </div>

    <div id="section04" class="pane tools">
      <div class="wrapper"><a href="#section03" class="prev">PREV</a>
                <h1 class="wow fadeIn">For a little light reading - download my resume.... Then ... let me know how we can work together!
                </h1>
        <div class="boxWrap cf">
            <a class="wow fadeIn box download" href="img/Resume_Scott_Sanders.pdf" target="_blank" data-wow-duration="0.25s" data-wow-delay="0.35s" ><h3>download</h3></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import home from '~/static/content/home/home.md'

export default {
  data () {
    return {
      content: home
    }
  },

  head () {
    return {
      title: this.content.title,
      meta: [
        { hid: 'description', name: 'description', content: this.content.metaDescription }
      ]
    }
  }
}
</script>
