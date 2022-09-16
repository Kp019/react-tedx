import React from "react";

function Schedule() {
  return (
    /*<section className="ftco-section bg-light" id="schedule-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center ftcoanimate">
          <span class="subheading">Schedule</span>
          <h2 class="mb-4">Program Schedule</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div class="ftco-schedule">
        <div class="row">
          *****  <div class="col-md-4 nav-link-wrap">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link ftcoanimate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab"
                aria-controls="v-pills-1" aria-selected="true">Day 01 <span>21 November 2019</span></a>
              <a class="nav-link ftcoanimate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab"
                aria-controls="v-pills-2" aria-selected="false">Day 02 <span>22 November 2019</span></a>
              <a class="nav-link ftcoanimate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab"
                aria-controls="v-pills-3" aria-selected="false">Day 03 <span>23 November 2019</span></a>
              <a class="nav-link ftcoanimate" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab"
                aria-controls="v-pills-4" aria-selected="false">Day 04 <span>24 November 2019</span></a>
            </div>
          </div> ***
          <div class="col-md-8 tab-wrap">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div> *****
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div> *****
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img" style="background-image:url(images/person_3.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div> ****
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img" style="background-image:url(images/person_3.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
              </div> *****
              <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img" style="background-image:url(images/person_3.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
              </div> ****
              <div class="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-day-4-tab">
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img"
                    style="background-image:url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
                <div class="speaker-wrap ftcoanimate d-flex">
                  <div class="img speaker-img" style="background-image:url(images/person_3.jpg)"></div>
                  <div class="text pl-md-5">
                    <span class="time">08:00AM - 10:00AM</span>
                    <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                      is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span class="position">Founder of
                        Wordpress</span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>*/
    <div className="ftcosection bg-light" id="schedulesection">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftcoanimate">
            <span className="subheading">Schedule</span>
            <h2 className="mb-4">Program Schedule</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="ftcoschedule">
          <div className="row">
            <div className="col-md-4 nav-link-wrap">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link ftcoanimate active"
                  id="v-pills-1-tab"
                  data-toggle="pill"
                  href="#v-pills-1"
                  role="tab"
                  aria-controls="v-pills-1"
                  aria-selected="true"
                >
                  Day 01 <span>21 November 2019</span>
                </a>
                <a
                  className="nav-link ftcoanimate"
                  id="v-pills-2-tab"
                  data-toggle="pill"
                  href="#v-pills-2"
                  role="tab"
                  aria-controls="v-pills-2"
                  aria-selected="false"
                >
                  Day 02 <span>22 November 2019</span>
                </a>
                <a
                  className="nav-link ftcoanimate"
                  id="v-pills-3-tab"
                  data-toggle="pill"
                  href="#v-pills-3"
                  role="tab"
                  aria-controls="v-pills-3"
                  aria-selected="false"
                >
                  Day 03 <span>23 November 2019</span>
                </a>
                <a
                  className="nav-link ftcoanimate"
                  id="v-pills-4-tab"
                  data-toggle="pill"
                  href="#v-pills-4"
                  role="tab"
                  aria-controls="v-pills-4"
                  aria-selected="false"
                >
                  Day 04 <span>24 November 2019</span>
                </a>
              </div>
            </div>

            <div className="col-md-8 tab-wrap">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-1"
                  role="tabpanel"
                  aria-labelledby="day-1-tab"
                >
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Introduction to Wordpress 5.0</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speakername">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>

                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        ackgroundImage: `url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Best Practices For Programming WordPress</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>

                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{ backgroundImage: `url(images/person_3.jpg)` }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Web Performance For Third Party Scripts</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-day-2-tab"
                >
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Introduction to Wordpress 5.0</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Best Practices For Programming WordPress</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{ backgroundImage: `url(images/person_3.jpg)` }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Web Performance For Third Party Scripts</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-3"
                  role="tabpanel"
                  aria-labelledby="v-pills-day-3-tab"
                >
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Introduction to Wordpress 5.0</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Best Practices For Programming WordPress</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{ backgroundImage: `url(images/person_3.jpg)` }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Web Performance For Third Party Scripts</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-4"
                  role="tabpanel"
                  aria-labelledby="v-pills-day-4-tab"
                >
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Introduction to Wordpress 5.0</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{
                        backgroundImage: `url(images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg)`,
                      }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Best Practices For Programming WordPress</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftcoanimate d-flex">
                    <div
                      className="img speaker-img"
                      style={{ backgroundImage: `url(images/person_3.jpg)` }}
                    ></div>
                    <div className="text pl-md-5">
                      <span className="time">08:00AM - 10:00AM</span>
                      <h2>
                        <a href="/">Web Performance For Third Party Scripts</a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <h3 className="speaker-name">
                        &mdash; <a href="/">Brett Morgan</a>{" "}
                        <span className="position">Founder of Wordpress</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
