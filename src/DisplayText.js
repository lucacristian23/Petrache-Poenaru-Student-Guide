import BackButton from "./BackButton.js";
import SelectCountry from "./SelectCountry.js";
export default function DisplayText({
  className,
  displayList,
  setDisplayList,
  selectedSubOption,
  setSelectedSubOption,
}) {
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
            <p>
              The candidates who have passed the Baccalaureate examination in
              the sessions corresponding to the school year 2022-2023 may
              submit, instead of the Baccalaureate / High-School Diploma, a
              certificate issued by the high school, obligatorily specifying the
              grade point averages obtained during the years of study, the
              validity term of the certificate and the fact that the
              Baccalaureate diploma was not issued - certified translation into
              Romanian;
            </p>
          )}
        {selectedSubOption.subOptionKey === "sub3" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <div>
              <h2>Required documents:</h2>
              <div style={{ border: "1px solid black" }}>
                <h4> A language proficiency certificate:</h4>
                <h5>
                  {" "}
                  The certificate needs to be minimum B2 level, internationally
                  recognized and not older than 2 years. Check{" "}
                  <a
                    href="https://umfcd.ro/en/wp-content/uploads/2023/ADMISSION_2023/FACULTY_OF_MEDICINE/ANNEX-3-EN-2023-2024.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ANNEX 3
                  </a>{" "}
                  to see the certificates accepted by our university. The
                  equivalent of this certificate can also be obtained by taking
                  an English language exam at UMPCD University. The citizens who
                  have completed the high school studies in an educational
                  institution in which the language of instruction is English or
                  who have obtained at least a B2 level as part of the
                  Baccalaureate examination are exempted from providing the
                  language proficiency certificate
                </h5>

                <div style={{ border: "1px solid black" }}>
                  <h4>Baccalaureate/High school Diploma (valid in Romania):</h4>
                  <h5>
                    Check{" "}
                    <a
                      href="https://umfcd.ro/en/wp-content/uploads/2023/ADMISSION_2023/FACULTY_OF_MEDICINE/ANEXA-7-Lista-diplomelor-recunoscute-de-MEC-conform-OMEN_4151_2020.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ANNEX 7
                    </a>{" "}
                    to see the list of diplomas that are valid in Romania. The
                    candidates who have passed the Baccalaureate examination in
                    the sessions corresponding to the school year 2022-2023 may
                    submit, instead of the Baccalaureate / High-School Diploma,
                    a certificate issued by the high school, obligatorily
                    specifying the grade point averages obtained during the
                    years of study, the validity term of the certificate and the
                    fact that the Baccalaureate diploma was not issued.
                  </h5>
                </div>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h4>Birth certificate</h4>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h4>Health certificate</h4>
                <h5>
                  {" "}
                  A certificate stating that the candidate to be accepted to
                  studies does not have any contagious diseases or any other
                  diseases incompatible with the medical profession. This
                  certificate can be obtain from the family doctor.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h4>Valid passport / identity card</h4>
                <h5>Should be scanned document in a PDF format </h5>
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
      </div>

      <BackButton displayList={displayList} setDisplayList={setDisplayList} />
    </div>
  );
}
