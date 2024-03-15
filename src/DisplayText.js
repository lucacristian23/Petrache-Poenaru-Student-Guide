import { useState } from "react";
import BackButton from "./BackButton.js";
import SelectCountry from "./SelectCountry.js";
export default function DisplayText({
  className,
  displayList,
  setDisplayList,
  selectedSubOption,
  setSelectedSubOption,
}) {
  const [admissionDocuments, setAdmissionDocuments] = useState(null);
  const [transportInfo, setTransportInfo] = useState(1);

  return (
    <div className={className}>
      <div className="contentContainer">
        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <div>
              <h2>Admission calendar:</h2>
              <div style={{ border: "1px solid black" }}>
                <h3>Session I:</h3>
                <h4> Online registration:</h4>
                <h5> 02.05.2023-30.06.2023</h5>
                <h4>File competition results:</h4>
                <h5>10.07.2023</h5>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>Session II:</h3>
                <h4> Online registration:</h4>
                <h5> 01.08.2023-25.08.2023</h5>
                <h4>File competition results:</h4>
                <h5>04.09.2023</h5>
              </div>
            </div>
          )}
        {selectedSubOption.subOptionKey === "sub2" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <div>
              <h3>General provisions regarding documents:</h3>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  1. All documents, except for the passport and language
                  proficiency certificate, must be accompanied by authorized and
                  legalized translations (by a notary) into Romanian;
                  translations in other languages are not accepted.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  2. Documents translated into Romanian from an intermediate
                  language must also be accompanied by the original version.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  3. The academic documents must be apostilled or legalized,
                  depending on the issuing country. More information can be
                  found here:{" "}
                  <a
                    href="https://cnred.edu.ro/lista-statelor-pentru-care-se-solicita-apostilarea-sau-
                    supralegalizarea/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://cnred.edu.ro/lista-statelor-pentru-care-se-solicita-apostilarea-sau-
                    supralegalizarea/
                  </a>{" "}
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  4. The validation of study documents with the Hague Apostille
                  is carried out by the competent authorities in the issuing
                  countries.{" "}
                  <a
                    href="https://www.hcch.net/en/instruments/conventions/authorities1/?cid=41"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.hcch.net/en/instruments/conventions/authorities1/?cid=41
                  </a>{" "}
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>5. The legalization of study documents is applied by:</h5>
                <h5>
                  a{")"} The Ministry of Foreign Affairs of the issuing country
                  and the Embassy/Consular Office of Romania in that country OR
                </h5>
                <h5>
                  b{")"} The Ministry of Foreign Affairs of the issuing country
                  and its Embassy/Consular Office in Romania, as well as the
                  Ministry of Foreign Affairs of Romania OR
                </h5>
                <h5>
                  c{")"} The Ministry of Education and the Ministry of Foreign
                  Affairs of the issuing country for countries where there are
                  no diplomatic missions of Romania or which do not have
                  diplomatic missions in Romania.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  6. If the candidate's name on the high school diploma is not
                  identical to the name on their birth certificate or passport,
                  the candidate is required to submit a notarized explanatory
                  note, accompanied by a translation into Romanian, legalized
                  (by a notary).
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  7. Citizens holding dual citizenship (Romanian and a NON-EU
                  state) will upload to the admission platform a notarized
                  declaration attesting that they opt, on their own
                  responsibility, for self-funded studies in foreign currency.
                  The document will be accompanied by a translation into
                  Romanian, legalized (by a notary).
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  8.Citizens who upload documents that contain discrepancies
                  regarding the name listed in them will upload to the platform
                  a notarized affidavit authenticated by a notary. The document
                  will be accompanied by a translation into Romanian, legalized
                  (by a notary).
                </h5>
              </div>
            </div>
          )}
        {selectedSubOption.subOptionKey === "sub3" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <div>
              <h2>Required documents:</h2>

              <button
                onClick={() => setAdmissionDocuments("UE")}
                className="button-8"
              >
                For EU Countries
              </button>

              <button
                onClick={() => setAdmissionDocuments("nonUE")}
                className="button-8"
              >
                For NON-EU Countries
              </button>

              <div
                className={admissionDocuments === "UE" ? "" : "hidden-element"}
              >
                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Evidence of English language proficiency, minimum level B2,
                    according to the Common European Framework of Reference for
                    Languages.
                  </h4>
                  <h5>
                    The language competence of candidates must be proven,
                    obligatorily, by the existence of supporting documents in
                    the application folder, according to one of the four
                    conditions below:
                  </h5>
                  <h5>
                    a{")"}By submitting to the application folder a language
                    proficiency certificate, internationally recognized, not
                    older than 2 years (see exceptions in{" "}
                    <a
                      href="https://umfcd.ro/wp-content/uploads/2021/STUDENTI_STRAINI/ANEXA-3.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ANNEX 3
                    </a>{" "}
                    ). The certificates must explicitly state the level of
                    language proficiency (minimum level B2, according to the
                    Common European Framework of Reference for Languages -{" "}
                    <a
                      href="https://umfcd.ro/wp-content/uploads/2021/STUDENTI_STRAINI/ANEXA-3.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ANNEX 3
                    </a>{" "}
                    ).
                  </h5>

                  <h5>
                    b{")"}Citizens who have completed high school studies in an
                    educational institution where the language of instruction is
                    English will present a certificate to this effect, issued by
                    the high school.
                  </h5>

                  <h5>
                    c{")"}Citizens who have achieved at least a B2 grade in
                    English, according to the Common European Framework of
                    Reference for Languages, in the baccalaureate exam will
                    present the document itself.
                  </h5>

                  <h5>
                    d{")"}Taking an English language exam at the Department of
                    Modern Languages, Faculty of Medicine-UMFCD. For taking this
                    exam, a fee of €400 (NON-EU countries) / the equivalent in
                    lei of €400 (EU countries) must be paid. Exam registration
                    is done by sending an email accompanied by a copy of the
                    passport/ID and proof of payment of the exam fee to the
                    address admission@umfcd.ro Exam appointments can only be
                    made during the admission session and according to Annex 8.
                  </h5>

                  <div style={{ border: "1px solid black" }}>
                    <h4>
                      Baccalaureate/High school Diploma (valid in Romania):
                    </h4>
                    <h5>
                      Check{" "}
                      <a
                        href="https://umfcd.ro/en/wp-content/uploads/2023/ADMISSION_2023/FACULTY_OF_MEDICINE/ANEXA-7-Lista-diplomelor-recunoscute-de-MEC-conform-OMEN_4151_2020.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ANNEX 7
                      </a>{" "}
                      to see the list of diplomas that are valid in Romania.
                      There is a possibility that the diploma may need to be
                      legalized or apostilled, depending on the country. Please
                      consult this link:{" "}
                      <a
                        href="https://cnred.edu.ro/lista-statelor-pentru-care-se-solicita-apostilarea-sau-supralegalizarea/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CNRED
                      </a>{" "}
                      to see which is applicable in your case. The candidates
                      who have passed the Baccalaureate examination in the
                      sessions corresponding to the school year 2022-2023 may
                      submit, instead of the Baccalaureate / High-School
                      Diploma, a certificate issued by the high school,
                      obligatorily specifying the grade point averages obtained
                      during the years of study, the validity term of the
                      certificate and the fact that the Baccalaureate diploma
                      was not issued.
                    </h5>
                  </div>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Transcript of Grades (from all high school years)</h4>
                  <h5>
                    {" "}
                    The transcript must include subjects such as Biology,
                    Physics, Chemistry, Physics-Chemistry, Life Sciences,
                    Mathematics. Candidates who have studied generically named
                    subjects (which include multiple sciences) will also present
                    their syllabus.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Birth certificate</h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Health certificate</h4>
                  <h5>
                    {" "}
                    This certificate must attest that the person who will be
                    admitted for studies does not have contagious diseases or
                    other conditions incompatible with the medical profession.
                    It will be issued by the family doctor, no more than 60 days
                    before the time of application.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Valid passport / identity card</h4>
                  <h5>Should be scanned document in a PDF format </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Proof of permanent residence abroad</h4>
                  <h5>
                    {" "}
                    Only for Romanian citizens residing abroad. The proof can
                    be:
                  </h5>

                  <h5>a{")"}Romanian passport with residence abroad OR</h5>
                  <h5>
                    b{")"}Identity card issued by the country of residence OR{" "}
                  </h5>
                  <h5>
                    c{")"}Certificate from the City Hall or Prefecture of the
                    city of residence.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Proof of payment</h4>
                  <h5>
                    For the non-refundable file processing fee of RON 1,000. It
                    needs to be paid by bank card, through an online payment
                    processor, in the admission platform.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Certificate obtained from the Ministry of Education – the
                    National Centre for Recognition and Equivalence of Diplomas
                  </h4>
                </div>
              </div>

              <div
                className={
                  admissionDocuments === "nonUE" ? "" : "hidden-element"
                }
              >
                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Evidence of English language proficiency, minimum level B2,
                    according to the Common European Framework of Reference for
                    Languages.
                  </h4>
                  <h5>
                    The language competence of candidates must be proven,
                    obligatorily, by the existence of supporting documents in
                    the application folder, according to one of the four
                    conditions below:
                  </h5>
                  <h5>
                    a{")"}By submitting to the application folder a language
                    proficiency certificate, internationally recognized, not
                    older than 2 years (see exceptions in{" "}
                    <a
                      href="https://umfcd.ro/wp-content/uploads/2021/STUDENTI_STRAINI/ANEXA-3.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ANNEX 3
                    </a>{" "}
                    ). The certificates must explicitly state the level of
                    language proficiency (minimum level B2, according to the
                    Common European Framework of Reference for Languages -{" "}
                    <a
                      href="https://umfcd.ro/wp-content/uploads/2021/STUDENTI_STRAINI/ANEXA-3.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ANNEX 3
                    </a>{" "}
                    ).
                  </h5>

                  <h5>
                    b{")"}Citizens who have completed high school studies in an
                    educational institution where the language of instruction is
                    English will present a certificate to this effect, issued by
                    the high school.
                  </h5>

                  <h5>
                    c{")"}Citizens who have achieved at least a B2 grade in
                    English, according to the Common European Framework of
                    Reference for Languages, in the baccalaureate exam will
                    present the document itself.
                  </h5>

                  <h5>
                    d{")"}Taking an English language exam at the Department of
                    Modern Languages, Faculty of Medicine-UMFCD. For taking this
                    exam, a fee of €400 (NON-EU countries) / the equivalent in
                    lei of €400 (EU countries) must be paid. Exam registration
                    is done by sending an email accompanied by a copy of the
                    passport/ID and proof of payment of the exam fee to the
                    address admission@umfcd.ro Exam appointments can only be
                    made during the admission session and according to Annex 8.
                  </h5>

                  <div style={{ border: "1px solid black" }}>
                    <h4>
                      Baccalaureate/High school Diploma (valid in Romania):
                    </h4>
                    <h5>
                      Check{" "}
                      <a
                        href="https://umfcd.ro/en/wp-content/uploads/2023/ADMISSION_2023/FACULTY_OF_MEDICINE/ANEXA-7-Lista-diplomelor-recunoscute-de-MEC-conform-OMEN_4151_2020.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ANNEX 7
                      </a>{" "}
                      to see the list of diplomas that are valid in Romania.
                      There is a possibility that the diploma may need to be
                      legalized or apostilled, depending on the country. Please
                      consult this link:{" "}
                      <a
                        href="https://cnred.edu.ro/lista-statelor-pentru-care-se-solicita-apostilarea-sau-supralegalizarea/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CNRED
                      </a>{" "}
                      to see which is applicable in your case. The candidates
                      who have passed the Baccalaureate examination in the
                      sessions corresponding to the school year 2022-2023 may
                      submit, instead of the Baccalaureate / High-School
                      Diploma, a certificate issued by the high school,
                      obligatorily specifying the grade point averages obtained
                      during the years of study, the validity term of the
                      certificate and the fact that the Baccalaureate diploma
                      was not issued.
                    </h5>
                  </div>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Transcript of Grades (from all high school years)</h4>
                  <h5>
                    {" "}
                    The transcript must include subjects such as Biology,
                    Physics, Chemistry, Physics-Chemistry, Life Sciences,
                    Mathematics. Candidates who have studied generically named
                    subjects (which include multiple sciences) will also present
                    their syllabus.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Birth certificate</h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Health certificate</h4>
                  <h5>
                    {" "}
                    This certificate must attest that the person who will be
                    admitted for studies does not have contagious diseases or
                    other conditions incompatible with the medical profession.
                    It will be issued by the family doctor, no more than 60 days
                    before the time of application.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Valid passport / identity card</h4>
                  <h5>
                    Should be scanned document in a PDF format. The passport
                    needs to be valid for at least 6 months from 01.10.2024{" "}
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Proof of permanent residence abroad</h4>
                  <h5>
                    {" "}
                    Citizens from NON-EU countries and Romanian citizens
                    residing abroad (NON-EU) must prove their permanent
                    residence abroad by:
                  </h5>

                  <h5>a{")"}passport with residence abroad OR</h5>
                  <h5>
                    b{")"}identity card issued by the country of residence
                    (NON-EU countries) OR{" "}
                  </h5>
                  <h5>
                    c{")"}certificate from the City Hall or Prefecture of the
                    city of residence.
                  </h5>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Proof of payment</h4>
                  <h5>
                    For the non-refundable file processing fee of RON 1,000. It
                    needs to be paid by bank card, through an online payment
                    processor, in the admission platform.
                  </h5>
                </div>
              </div>
            </div>
          )}
        {selectedSubOption.subOptionKey === "sub4" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <div>
              <p>
                Selection criteria ANNEX 6 The hierarchy of the candidates shall
                be drawn up in the descending order of the score obtained and
                the provisional lists with the potentially admitted candidates
                shall be posted on the university website (www.umfcd.ro). The
                provisional list of admitted candidates is not equivalent to the
                enrollment in the 1st year of studies. The enrollment of the
                admitted candidates is conditional upon fulfilling the following
                requirements: - submitting the entire file (all the documents
                from the platform in hardcopy), the high school diploma in the
                original (or a notary statement, in Romanian, specifying the
                date when the high school diploma in the original shall be
                submitted - certified translation into Romanian) and the
                certificate of linguistic competency; - fulfilling the legal
                conditions for enrollment, including the recognition and
                equivalence of the high school studies by the Ministry Education
                in Romania; - signing the study contract and paying the
                financial obligations. The admitted candidates must confirm
                their enrollment decision, by proof of paying the tuition fee
                and signing the enrollment contract according to the schedule of
                the current Methodology.{" "}
              </p>
              <img src="/annex6.png" alt="test" />
            </div>
          )}
        {selectedSubOption.subOptionKey === "sub5" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <p>
              1.The candidate shall access the UMPCD entrance platform and shall
              upload all the mentioned documents (the selection criteria set by
              the university shall be filled in with the personal information
              required in Annex 6-which will be automatically generated by the
              registration platform, after completing it). 2.The candidates'
              files submitted online are subject to a verification by the Office
              for Foreign Students: - If the file contains all the mentioned
              documents. - If the file is complete, the candidate shall receive
              a validation email. - If the file is incomplete, the candidate
              shall receive an email through which he/she shall be asked for
              correction. Completing the files with the requested documents is
              only the candidate's obligation and must be done within the legal
              submission deadline, according to the admission calendar. A
              maximum of 3 corrections are allowed for each file. Candidates who
              apply on the last day can complete their files until 03.07.2023,
              15:00 (session I) or 28.08.2023, 15:00 (session II). Any
              correction made after the registration deadline is no longer taken
              into account.The candidate is declared eligible when the file is
              complete. The incomplete files are processed but are not eligible
              for assessment. The assessment committee, appointed by a decision
              of the Board of Trustees, verifies the files by awarding a score
              in accordance with the Assessment Grid. The enrollment in the
              study programmes of the university depends on the recognition of
              the studies by the National Centre for Recognition and Equivalence
              of Diplomas. The non-recognition by the National Centre for
              Recognition and Equivalence of Diplomas of your studies denies
              your enrollment.{" "}
            </p>
          )}

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "Obtaining Romanian Entry Visa" && (
            <SelectCountry />
          )}

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "Transport in Bucharest" && (
            <div>
              <div className={transportInfo === 1 ? "" : "hidden-element"}>
                <h4>
                  How to use Info TB App for navigating the Bucharest like a
                  local!
                </h4>
                <div style={{ border: "1px solid black" }}>
                  <h5>
                    The Info TB app is an extremely useful tool when it comes to
                    using public transport in Bucharest. One of its most
                    valuable features is the ability to track in real-time the
                    location of any tram, bus, or minibus on the map.
                    Additionally, Info TB can provide you with the optimal
                    routes to travel from point A to point B, showing you on the
                    map the walking path, the bus stop where you need to board
                    the necessary bus, and where you need to get off.
                  </h5>
                </div>
                <h5 style={{ textAlign: "left" }}>
                  1. Learn how to track in real-time the location of any tram,
                  bus, or minibus on the map.
                </h5>
                <button
                  className="button-8"
                  onClick={() => setTransportInfo(2)}
                >
                  PRESS HERE
                </button>{" "}
                <h5 style={{ textAlign: "left" }}>
                  2. Learn how to find out the optimal routes to travel from
                  point A to point B.
                </h5>
                <button
                  className="button-8"
                  onClick={() => setTransportInfo(3)}
                >
                  PRESS HERE
                </button>
              </div>

              <div className={transportInfo === 2 ? "" : "hidden-element"}>
                <h4>
                  {" "}
                  Learn how to track in real-time the location of any tram, bus,
                  or minibus on the map
                </h4>
                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 1: Once you're in the app, click on the 'Lines' button.
                  </h4>
                  <div>
                    <img
                      src="/transporta1.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 2: Select the line number of the public transportation
                    route you want to view in real-time on the map. Let's say we
                    want to see the location of the trams on line 1.
                  </h4>
                  <div>
                    <img
                      src="/transporta2.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 3: Select the desired direction of travel for the
                    public transportation route.
                  </h4>
                  <div>
                    <img
                      src="/transporta3.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 4: Look at the map and observe how far away the nearest
                    public transportation vehicle is from the station you're
                    interested in.
                  </h4>
                  <div>
                    <img
                      src="/transporta4.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              <div className={transportInfo === 3 ? "" : "hidden-element"}>
                <h4>
                  {" "}
                  Learn how to find out the optimal routes to travel from point
                  A to point B.
                </h4>
                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 1: Once you're in the application, press "Search
                    Destination" to input the location you want to reach.
                  </h4>
                  <div>
                    <img
                      src="/transportb1.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 2: Enter in the box labeled FROM, the one with the blue
                    flag, the name of the location from where you want to start
                    your journey. Let's assume we want to depart from the
                    Faculty of Medicine and head to Promenada Mall. Once all the
                    data is correctly entered, we will press the "Search Best
                    Routes" button.
                  </h4>
                  <div>
                    <img
                      src="/transportb2.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 3: Choose the route that appeals to you the most, based
                    on your preferences. In our example, we will select the
                    first route, as it is the fastest (only 38 minutes).
                  </h4>
                  <div>
                    <img
                      src="/transportb3.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Step 4: Now we can analyze the route details. We notice that
                    we'll need to walk for 8 minutes to reach the "Eroilor"
                    metro station on the M3 line. Once we take the metro towards
                    "Anghel Saligny," we'll need to get off at the "Piata
                    Unirii" station on the M3 line. Then, we'll need to travel
                    through the underground passage to reach the "Piata Unirii"
                    metro station on the M2 line. Next, we'll travel towards
                    "Pipera" direction and arrive at the "Aurel Vlaicu" metro
                    station. Finally, we'll need to walk for 9 minutes to reach
                    our destination.
                  </h4>
                  <div>
                    <img
                      src="/transportb4a.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Before we start our journey, we can press the "Start" button
                    to receive real-time notifications about how many stations
                    we have left until we need to disembark from public
                    transportation. Additionally, we can also press the "Map"
                    button to see the route we're about to take directly on the
                    map of Bucharest.
                  </h4>
                  <div>
                    <img
                      src="/transportb4.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    This will be our route. We can zoom in on the important
                    points to see more details. We will zoom towards the
                    starting point, where the blue flag is.
                  </h4>
                  <div>
                    <img
                      src="/transportb5.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    The dotted line represents the route we need to walk to get
                    to the 'Eroilor' metro station.
                  </h4>
                  <div>
                    <img
                      src="/transportb6.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    The distance between the two metro stations, with that point
                    in the middle, represents the route through the underground
                    passage to get from one line to another.
                  </h4>
                  <div>
                    <img
                      src="/transportb7.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <h4>
                    Now we can see the route we need to walk from the station
                    where we need to get off to the destination, represented by
                    the red flag.
                  </h4>
                  <div>
                    <img
                      src="/transportb8.jpeg"
                      alt="da"
                      style={{ maxWidth: "70%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub2" &&
          selectedSubOption.parentTitle === "Transport in Bucharest" && (
            <div>
              <h2>All you need to know about the subway system</h2>
              <div>
                <h3 style={{ textAlign: "left" }}>
                  The metro map of Bucharest is highly useful and incredibly
                  easy to use. By utilizing it, we won't encounter any issues
                  regarding where to disembark, which metro line to take, at
                  which station to transfer, and which route to follow to reach
                  from point A to point B. Press{" "}
                  <a
                    href="http://www.metrorex.ro/Resurse/Harta/harta_2023.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HERE
                  </a>{" "}
                  in order to open the map.
                </h3>

                <h4 style={{ textAlign: "left" }}>
                  Casting a first glance over the map, we can observe the five
                  available mainlines, each with its specific color. The dotted
                  mainlines represent subway lines that will be built in the
                  future.
                </h4>
                <div style={{ border: "1px solid black" }}>
                  <h4 style={{ textAlign: "left" }}>
                    <span style={{ color: "#FFD700" }}>Yellow:</span> The line
                    number 1(M1), between Dristor 1 and Pantelimon
                  </h4>

                  <h4 style={{ textAlign: "left" }}>
                    <span style={{ color: "blue" }}>Blue:</span> The line number
                    2(M2), between Pipera and Tudor Arghezi
                  </h4>

                  <h4 style={{ textAlign: "left" }}>
                    <span style={{ color: "red" }}>Red:</span> The line number
                    3(M3), between Preciziei and Anghel Saligny
                  </h4>

                  <h4 style={{ textAlign: "left" }}>
                    <span style={{ color: "green" }}>Green:</span> The line
                    number 4(M4), between Straulesti and Gara de Nord 2
                  </h4>

                  <h4 style={{ textAlign: "left" }}>
                    <span style={{ color: "orange" }}>Orange:</span> The line
                    number 5(M5), between Valea Ialomitei/Raul Doamnei and
                    Eroilor
                  </h4>
                </div>

                <h4 style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "1.5em" }}>S</span>ome stations serve
                  as interchange hubs, providing access to two different subway
                  lines simultaneously. Pedestrians will need to traverse
                  through the underground passage to move from Station 1, which
                  has access to one subway line, to Station 2, which provides
                  access to a different subway line. These types of stations are
                  represented on the map with the following symbol.
                </h4>

                <img
                  src="/doublestation.png"
                  alt="da"
                  style={{
                    maxWidth: "200%",
                    height: "200%",
                    objectFit: "cover",
                  }}
                />

                <h4 style={{ textAlign: "left" }}>
                  If you look at the map, you can see that the "Piata Victoriei"
                  station has such a symbol. Piata Victoriei 1 provides access
                  to the Yellow mainline (M1), and Piata Victoriei 2 provides
                  access to the Blue mainline (M2).
                </h4>

                <h4 style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "1.5em" }}>F</span>urthermore,
                  between certain stations, metro trains can operate on two
                  different lines. We can observe how Timpuri Noi and Mihai
                  Bravu stations are interconnected by both the red and yellow
                  lines. To determine which line the train we're about to board
                  is on, we can either read the display on the front of the
                  train or the station display announcing upcoming trains,
                  indicating the last station towards which the train is headed.
                  For instance, if we're waiting at Timpuri Noi station and see
                  that the train displays "Anghel Saligny," it means the train
                  is operating on the red line (M3), heading towards "Anghel
                  Saligny." The train will proceed similarly to trains on the
                  yellow line (M1) until it reaches "Nicolae Grigorescu"
                  station, where we can observe the two routes of the lines
                  diverging.
                </h4>

                <h4 style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "1.5em" }}>W</span>ith all this
                  knowledge, we can figure out how to get from any station A to
                  any station B. For example, if we want to travel from Eroilor
                  (M2) to Parc Bazilescu (M4), looking at the map, we can see
                  that the most optimal route would be to first travel towards
                  Basarab, taking the metro in the direction of Dristor 1. Once
                  we reach Basarab, we can switch lines, noting the symbol we
                  discussed earlier. Once we've arrived at the location of green
                  line(M4), all we need to do is take the metro in the direction
                  of Straulesti and get off at Parc Bazilescu station.
                </h4>

                <h3>
                  Let's take a look at the metro ticket prices, including
                  discounts for multiple trips purchased, available
                  subscriptions, and also discounts for students.
                </h3>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>1 Journey - 3 LEI</h3>
                <h3>2 Journeys - 6 LEI</h3>
                <h3>24-hour pass - 8 LEI</h3>
                <h3>72-hour pass - 20 LEI</h3>
                <h3>Weekly Pass - 30 LEI</h3>
                <h3>Monthly Pass - 80 LEI</h3>
                <h3>6 Month Pass - 400 LEI</h3>
                <h3>Yearly Pass - 700 LEI</h3>
                <h3>Monthly Pass with 90% off for students - 8 LEI</h3>
                <h3>10 Journeys with 90% off for students - 2,50 LEI</h3>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub3" &&
          selectedSubOption.parentTitle === "Transport in Bucharest" && (
            <div>
              <h2>Ridesharing Apps In Bucharest</h2>

              <h3>
                The majority of popular ride-sharing companies in Europe can
                also be used in Romania.
              </h3>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub4" &&
          selectedSubOption.parentTitle === "Transport in Bucharest" && (
            <div>
              <h2>Airport Transfers: Getting to and from the Airport</h2>

              <h3>
                To travel to or from the airport, apart from using a taxi or a
                ride-sharing service, you can also opt for the two non-stop bus
                lines, namely line 100 and line 442. Additionally, there's the
                option of a 15-minute non-stop train journey, which will take
                you directly from the Airport to Gara de Nord.
              </h3>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub3" &&
          selectedSubOption.parentTitle === "Accommodation" && (
            <div>
              <h2>Finding Rentals on Online Platforms</h2>
              <h3>
                For optimal results in finding an apartment to your liking
                online, it's recommended to search on Google in Romanian rather
                than English. "Inchiriere Apartament Bucuresti" would yield more
                useful results than "Rent Apartment Bucharest." After conducting
                a search in Romanian, you should see results from the most
                popular rental websites in the country, where you'll have very
                good chances of finding something to your liking. The only
                difficulty might be navigating the website in Romanian. Use the
                filters on the website to make the search process easier for
                you.
              </h3>
            </div>
          )}
      </div>

      <BackButton
        displayList={displayList}
        setDisplayList={setDisplayList}
        transportInfo={transportInfo}
        setTransportInfo={setTransportInfo}
      />
    </div>
  );
}
