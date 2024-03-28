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
  const [permitDocuments, setPermitDocuments] = useState(null);
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
                <h5> 02.05.2024-30.06.2024</h5>
                <h4>File competition results:</h4>
                <h5>10.07.2024</h5>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>Session II:</h3>
                <h4> Online registration:</h4>
                <h5> 01.08.2024-25.08.2024</h5>
                <h4>File competition results:</h4>
                <h5>04.09.2024</h5>
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
                      sessions corresponding to the school year 2024-2025 may
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
                      sessions corresponding to the school year 2024-2025 may
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
              <h2>Evaluation Criteria for Admission</h2>
              <h3>
                Each candidate will receive a score based on the subjects they
                have studied and the grades obtained in the last two years of
                high school. Please refer to{" "}
                <a
                  href="https://umfcd.ro/en/wp-content/uploads/2023/ADMISSION_2023/FACULTY_OF_MEDICINE/ANNEX-6-EN-2023-2024.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  ANNEX 6
                </a>{" "}
                for details on how to calculate the score. From each admission
                session, the top-performing candidates, in the number of
                available seats for that session, will be declared admitted.
              </h3>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub5" &&
          selectedSubOption.parentTitle ===
            "Admission Process for English Programs" && (
            <div>
              <h2>Admission Process for English Programs</h2>
              <h3>
                The process of submitting documents online to apply for
                university is very straightforward. Click{" "}
                <a
                  href="https://umfcd.ro/en/wp-content/uploads/2023/ADMISSION_2023/TUTORIAL/FSA-Plattform-Tutorial.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>HERE</span>
                </a>{" "}
                to watch a detailed video tutorial covering the entire
                application process.
              </h3>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "Obtaining Romanian Entry Visa" && (
            <SelectCountry />
          )}

        {selectedSubOption.subOptionKey === "sub2" &&
          selectedSubOption.parentTitle === "Obtaining Romanian Entry Visa" && (
            <div>
              <h2>Documents needed for the visa:</h2>
              <div style={{ border: "1px solid black" }}>
                <h3>PROOF OF ACCEPTANCE FOR STUDIES</h3>
                <h4>
                  Proof of acceptance for studies from the Romanian Ministry of
                  Education, attesting that the visa applicant will attend a
                  full-time course of study at a state or private higher
                  education institution, accredited or provisionally authorized
                  according to Law
                </h4>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>PROOF OF PAYMENT OF FEES</h3>
                <h4>
                  Proof of payment of the tuition fee for at least one academic
                  year
                </h4>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>MEANS OF SUPPORT</h3>
                <h4>
                  Proof of means of support at the level of the minimum
                  guaranteed gross salary, monthly, for the entire period
                  specified in the visa
                </h4>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>CRIMINAL RECORD</h3>
                <h4>
                  Criminal record or any other document of equivalent legal
                  value
                </h4>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>TRAVEL MEDICAL INSURANCE</h3>
                <h4>
                  Travel medical insurance that covers the entire duration of
                  the requested period of stay
                </h4>
              </div>
              <div style={{ border: "1px solid black" }}>
                <h3>CONSENT OF THE LEGAL REPRESENTATIVE</h3>
                <h4>
                  If you are underage, the consent of your parents or of your
                  legal guardian for the purpose of residing in Romania for
                  studies
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "2vh" }}>
                <h3>ACCOMMODATION</h3>
                <h4>Proof of accommodation</h4>
              </div>

              <div style={{ border: "1px solid black", padding: "2vh" }}>
                <h3>
                  PROOF OF KNOWLEDGE OF THE LANGUAGE OF THE STUDY PROGRAMME
                </h3>
                <h4>
                  Proof of knowledge of the language of the study programme to
                  be followed, with the exception of the preparatory year of
                  Romanian language for foreign citizens
                </h4>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub3" &&
          selectedSubOption.parentTitle === "Obtaining Romanian Entry Visa" && (
            <div>
              <div>
                <h2>Steps to apply for the visa:</h2>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 1: Access the visa application website</h3>
                  <h4>
                    Click on the provided link to access the visa application
                    website of the Romanian Ministry of Internal Affairs.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 2: Select the English language</h3>
                  <h4>
                    Once on the site, select the English language by clicking on
                    the button in the top right corner.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 3: Begin the application process</h3>
                  <h4>
                    Click on the "Apply for a visa" button and select the
                    "Apply" sub-button.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 4: Accept terms and conditions</h3>
                  <h4>
                    Check the box to confirm acceptance of the terms and
                    conditions, then proceed by clicking on the "Next" button.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 5: Provide personal information</h3>
                  <h4>
                    Enter your email address and choose a password. Also,
                    accurately transcribe the text from the image to verify you
                    are not a robot.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 6: Verify your file number</h3>
                  <h4>
                    Access the email sent to you, containing your file number,
                    and click on the provided link.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 7: Log in and access your application</h3>
                  <h4>
                    Log in using your file number and password, solve the
                    captcha, and proceed to the application.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 8: Update visa application</h3>
                  <h4>
                    Enter the application file and click on the "Update visa
                    application" button.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 9: Complete application sections</h3>
                  <h4>
                    Fill out all sections carefully, ensuring accurate
                    information. Upload required documents as specified.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 10: Review application summary</h3>
                  <h4>
                    Check if all data is entered correctly. If necessary, click
                    on "Update visa application" to make modifications.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 11: Download visa application file</h3>
                  <h4>
                    Download the visa application file in ZIP format. Access and
                    print the PDF named Form_Visa_D for future reference.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 12: Submit application</h3>
                  <h4>
                    Click on the "Send file" button to submit your visa
                    application file.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 13: Await validation</h3>
                  <h4>
                    Await confirmation email regarding the validation of your
                    visa application file.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 14: Schedule interview</h3>
                  <h4>
                    Once validated, schedule an interview appointment at the
                    Romanian embassy in your country through the provided
                    interface.
                  </h4>
                </div>
                <div style={{ border: "1px solid black", padding: "2vh" }}>
                  <h3>Step 15: Attend interview</h3>
                  <h4>
                    Attend the scheduled interview at the embassy as per your
                    appointment.
                  </h4>
                </div>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "Legal Residence in Romania" && (
            <div>
              <h2>General informations</h2>
              <div style={{ border: "1px solid black", padding: "2vh" }}>
                <h3>EU/EEA/Swiss Confederation</h3>
                <h4>
                  Citizens of the EU/EEA/Swiss Confederation can enter and stay
                  on the territory of Romania according to the right to free
                  movement and residence granted by the legislation of the
                  Romanian state, in accordance with the European provisions. If
                  you stay in Romania for more than 3 months, you must register
                  your residence (obtain a registration certificate) at the
                  General Inspectorate for Immigration.
                </h4>
              </div>
              <div style={{ border: "1px solid black", padding: "2vh" }}>
                <h3>Non-EU citizens</h3>
                <h4>
                  Non-EU citizens must apply for a Residency permit – “Permis de
                  sedere” .The residence permit certifies your right to stay in
                  Romania, and you can obtain it from the General Inspectorate
                  for Immigration.
                </h4>

                <h4>
                  {" "}
                  Very important: you must submit your documents for the
                  residency at least 30 days before the expiry of the right to
                  stay granted by the study visa.
                </h4>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub2" &&
          selectedSubOption.parentTitle === "Legal Residence in Romania" && (
            <div>
              <h2>Required documents:</h2>

              <button
                onClick={() => setPermitDocuments("UE")}
                className="button-8"
              >
                For Citizens of The EU/EEA/Swiss Confederation
              </button>

              <button
                onClick={() => setPermitDocuments("nonUE")}
                className="button-8"
              >
                For Citizens From Non-EU Citizens
              </button>

              <div className={permitDocuments === "UE" ? "" : "hidden-element"}>
                <div style={{ border: "1px solid black" }}>
                  <h4>Identity Card or Passport (original and copy)</h4>

                  <div style={{ border: "1px solid black" }}>
                    <h4>
                      Documents attesting to the fact that you are enrolled in
                      the faculty. (student ID, student card or certificate
                      issued by the International Student Service)
                    </h4>
                  </div>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Proof Of Means of Maintenance (declaration on your own
                    responsibility that shows that you can support yourself)
                  </h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Proof of health insurance, with the exception of persons
                    falling under art. 213 paragraph (1) letter a{")"} from Law
                    no. 95/2006, with subsequent amendments and additions such
                    as:
                    <h5>
                      a{")"} Documents certifying the quality of insured in the
                      national health insurance system in Romania, respectively
                      European health card, insurance card, other documents
                      certifying this quality
                    </h5>
                    <h5>
                      b{")"} Documents certifying the quality of being insured
                      in the national health insurance systems of other member
                      states, respectively the European social health insurance
                      card or any other form that opens the right to medical
                      assistance, issued in application of Regulation (EC) no.
                      883/ 2004 of the European Parliament and the Council of
                      April 29, 2004 regarding the coordination of social
                      security systems, published in the Official Journal of the
                      European Union series L no. 166 of April 30, 2004, with
                      subsequent amendments and additions
                    </h5>
                    <h5>
                      c{")"} Health insurance concluded with private insurance
                      companies that cover, on the territory of Romania, at
                      least the risks covered by health insurance in the
                      Romanian social health insurance system.
                    </h5>
                    <h5>
                      Health insurance taken out for tourist purposes is not
                      accepted.
                    </h5>
                  </h4>
                </div>
              </div>

              <div
                className={permitDocuments === "nonUE" ? "" : "hidden-element"}
              >
                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Border crossing document (passport, travel document, etc.) -
                    original and copy
                  </h4>

                  <div style={{ border: "1px solid black" }}>
                    <h4>Copy of the study visa</h4>
                  </div>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Copy of the last entrance to Romania (the stamp that shows
                    when you last entered Romania)
                  </h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Letter of acceptance - original and copy</h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Certificate from the educational institution proving that
                    you are enrolled to study - original and copy
                  </h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Rental contract for one year - original and copy</h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Medical certificate from the university doctor or any other
                    doctor in Romania stating that you do not suffer from any
                    conditions that endanger the public health - original and
                    copy
                  </h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Proof of means of support amounting to at least the minimum
                    gross salary per country guaranteed in payment for at least
                    six months (As of now, a bank statement with a balance of
                    19800 lei or 4000 euros is required.)
                  </h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>Fees -</h4>
                  <h4>
                    a. Consular fee - 597 lei (the equivalent of 120 euros)
                  </h4>
                  <h4>
                    b. Residence permit (card) fee - 259 lei -to be paid in CEC
                    BANK
                  </h4>
                </div>

                <div style={{ border: "1px solid black" }}>
                  <h4>
                    Students who have reached the age of 26 are required to have
                    social health insurance: First, you should go to “Casa de
                    Asigurari de Sanatate Bucuresti”-C.A.S.M.B. and obtain the
                    quality of being insured.
                  </h4>

                  <h4>
                    Those who have turned 26 years old must provide proof of
                    medical insurance as follows:
                  </h4>
                  <h5>
                    If they have not had a residence permit before, they can
                    provide proof of private medical insurance.
                  </h5>
                  <h5>
                    If they have had a residence permit before, they must pay
                    1800 lei to ANAF for medical insurance.
                  </h5>
                </div>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub3" &&
          selectedSubOption.parentTitle === "Legal Residence in Romania" && (
            <div>
              <h2>How to apply online:</h2>
              <div style={{ border: "1px solid black" }}>
                <h5>
                  1. Click{" "}
                  <a
                    href="https://portaligi.mai.gov.ro/portaligi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>HERE</span>
                  </a>{" "}
                  to open the IGI portal.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  2. Click on the "settings" button in the top right corner and
                  set the display language to English.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  3. Click on the "Registration" button. Create an account by
                  filling in your first name, last name, an email address you
                  wish to associate with your IGI account, and also a password.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  4. Check your email inbox for the account activation email
                  from IGI. Click on the link provided in that email.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  5. Log in to your IGI account by entering the email address
                  and password you chose when creating the account.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  6. Once logged in, click on the button with a person's face
                  icon. This should open several sub-buttons. Click on the
                  "Profiles" button.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  7. Now click on the "Add Profile" button and carefully fill
                  out your profile. Through this profile, you will be able to
                  make requests for permits or registration certificates.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  8. After successfully saving and creating your profile, click
                  again on the button with the person's face icon, but this time
                  select "Apply Online" from the sub-options. Now click on the
                  "Add Request" button under the site header.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  9. Select your profile and choose "Issuance of the permanent
                  residence card for EU citizens" if you are a citizen from the
                  EU/EEA/Swiss Confederation or "Extension of the stay right for
                  studies" if you are a citizen from a Non-EU Country
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  10. Carefully fill in all the required information. When you
                  reach the document upload section, carefully upload all the
                  required documents. You can find the necessary documents in
                  the "Required Documents" sub-option under the "Legal Residence
                  in Romania" section. For processing any PDFs, you can use the
                  website https://pdfresizer.com/.
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  11. Once you have filled in all the fields and uploaded all
                  the documents, click on the "Save & Send" button to submit the
                  request. If you only want to save the request without
                  submitting it yet, to avoid losing your progress, click on the
                  "Save" button. All requests will be accessible under "Apply
                  Online".
                </h5>
              </div>

              <div style={{ border: "1px solid black" }}>
                <h5>
                  12. You should now receive a confirmation email of the
                  submission of your request, and after a few days, an email
                  informing you of the date and time you need to physically
                  present yourself with all the original and copied documents.
                  You will also need to have a printed request, which will be
                  automatically generated by the portal. To obtain this request,
                  you need to go to "Apply Online". Then you will need to click
                  on your request and press the "Print" button.
                </h5>
              </div>
            </div>
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
                      src="/trasporta44.jpeg"
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

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "Accommodation" && (
            <div>
              <h2>Application Process for University Dormitories</h2>
              <h3>
                To apply for a place in the university dormitory, the applicant
                will need to complete a form provided by the International
                Students Office, after submitting the physical file.
              </h3>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub2" &&
          selectedSubOption.parentTitle === "Accommodation" && (
            <div>
              <h2>Application Process for Private Dormitories</h2>

              <h3 style={{ textAlign: "left" }}>
                In Bucharest, the options for private dormitories are diverse.
                When applying to a private dormitory, the process typically
                involves several key steps.
              </h3>

              <h3 style={{ textAlign: "left" }}>
                Firstly, you'll need to complete the accommodation application
                form provided by the dormitory. This form will require you to
                fill in personal information accurately and may request various
                documents to support your application.
              </h3>

              <h3 style={{ textAlign: "left" }}>
                Once you've filled out the application, the next step is to
                gather and submit the necessary documents. These documents
                commonly include a copy of your identification, proof of
                enrollment at your educational institution, financial statements
                or evidence of payment, and any other documents specified by the
                dormitory.
              </h3>

              <h3 style={{ textAlign: "left" }}>
                After submitting your application and documents, you'll likely
                need to make payments as required by the dormitory. This could
                involve paying a reservation fee or administrative fees to
                secure your place in the dormitory.
              </h3>

              <h3 style={{ textAlign: "left" }}>
                Finally, upon completing these steps, you'll receive
                confirmation regarding your accommodation. The dormitory will
                inform you whether you've been allocated a place. If successful,
                you'll need to confirm your acceptance and potentially fulfill
                any additional requirements outlined by the dormitory to
                finalize your enrollment.
              </h3>

              <h3 style={{ textAlign: "left" }}>
                It's important to remember that while these are general steps,
                the specific requirements and procedures may vary between
                different private dormitories in Bucharest. Therefore, it's
                advisable to carefully review the instructions provided by the
                dormitory you're interested in and to follow them accordingly.
              </h3>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "Student Fees" && (
            <div>
              <h2>Student Fees</h2>
              <h3>
                Citizens from states requiring a study visa (check Obtain
                Romanian Entry Visa-{">"}Find out if you require entry visa)
                will be required to pay the full tuition fees(8,500.00 €) in
                order to obtain the study visa. Conversely, citizens from
                countries not requiring a study visa (mostly those from EU
                countries) can pay in installments as follows:
              </h3>
              <h4>
                1st Installment: 2,125.00 € on 15.07.2024 for the students
                enrolled in Sesssion I and 10.09.2024 for the students enrolled
                in Session II
              </h4>
              <h4>2nd Installment: 2,125.00 € on 15.09.2024</h4>
              <h4>3rd Installment: 2,125.00 € on 01.03.2025</h4>
              <h4>4th Installment: 2,125.00 € on 01.05.2025</h4>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub1" &&
          selectedSubOption.parentTitle === "What to do in Bucharest" && (
            <div>
              <h2>What to do in Bucharest</h2>

              <h3>
                Here you can see a list of some of the attractions you can visit
                in Bucharest.
              </h3>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Palace of the Parliament</h3>
                <h4>
                  The largest administrative building in Europe and one of the
                  largest buildings in the world, built during Nicolae
                  Ceaușescu's regime. Guided tours offer a fascinating insight
                  into its history and architecture.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>National Military Circle</h3>
                <h4>
                  An imposing building located in the city center, representing
                  one of the most important symbols of Bucharest. It's an ideal
                  place to admire the architecture and better understand
                  Romania's military history.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Bellu Cemetery</h3>
                <h4>
                  One of the largest and oldest cemeteries in Bucharest, hosting
                  the graves of prominent figures from Romania's history and
                  culture. It's a fascinating place to discover the stories
                  behind the graves and to observe their sculptures and
                  architecture.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>National Museum of Art of Romania</h3>
                <h4>
                  Located in the Royal Palace near Revolution Square, the museum
                  houses an impressive collection of Romanian and European art,
                  including significant works by famous artists such as
                  Brâncuși, Grigorescu, and El Greco.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Union Square and the Old Town</h3>
                <h4>
                  A vibrant area with pedestrian streets, terraces, restaurants,
                  and shops, where numerous historical monuments and old
                  churches can be found. It's the ideal place to explore the
                  authentic atmosphere of Bucharest and enjoy traditional
                  Romanian cuisine.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Herastrau Park</h3>
                <h4>
                  The largest park in Bucharest, offering a relaxing oasis in
                  the midst of the city bustle. Visitors can take boat rides on
                  Herastrau Lake, rent bicycles, or explore the Japanese Garden.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Romanian Athenaeum</h3>
                <h4>
                  One of the most renowned cultural buildings in Bucharest, with
                  impressive architecture and a unique concert hall. Classical
                  music concerts and other cultural events are organized here.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Romanian Peasant Museum</h3>
                <h4>
                  A museum dedicated to Romanian folk culture and traditions,
                  with exhibitions on traditional costumes, rural architecture,
                  traditional crafts, and household objects.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Lipscani Quarter</h3>
                <h4>
                  A historic area in the Old Town of Bucharest, known for its
                  narrow, charming streets filled with restaurants, bars, art
                  galleries, and souvenir shops.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>National Museum of Romanian History</h3>
                <h4>
                  An impressive museum housing vast collections of historical
                  artifacts, including objects from ancient civilizations to
                  modern Romania.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Macca-Vilacrosse Passage</h3>
                <h4>
                  A covered passage with beautiful architecture and pleasant
                  terraces, located in the city center. It's a popular spot to
                  enjoy a coffee or admire the period architecture.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Dimitrie Brândză Botanical Garden</h3>
                <h4>
                  A green oasis in the heart of the city, hosting an impressive
                  variety of plants and flowers, as well as picturesque alleys
                  for relaxing walks.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>George Enescu National Museum</h3>
                <h4>
                  An institution dedicated to the famous Romanian composer
                  George Enescu, where visitors can discover permanent and
                  temporary exhibitions about his life and musical creations.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Triumphal Arch</h3>
                <h4>
                  A replica of the famous Arc de Triomphe in Paris, located in a
                  central point of the city and offering a panoramic view of
                  Bucharest from its upper platform.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Victory Square and Victoria Palace</h3>
                <h4>
                  One of the most important road and political junctions in
                  Bucharest, surrounded by historical buildings, government
                  offices, and Kiseleff Park.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Cișmigiu Park</h3>
                <h4>
                  Another beautiful park in central Bucharest, offering shady
                  alleys, boating lakes, playgrounds, and many other facilities
                  for outdoor recreation.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Bucharest National Theatre</h3>
                <h4>
                  A prestigious cultural institution with a rich history and
                  impressive architecture, where theater, opera, and ballet
                  performances can be seen.
                </h4>
              </div>

              <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Museum of Contemporary Art (MNAC)</h3>
                <h4>
                  Located in the Palace of Parliament, this museum hosts an
                  impressive collection of Romanian and international
                  contemporary art.
                </h4>
              </div>
            </div>
          )}

        {selectedSubOption.subOptionKey === "sub2" &&
          selectedSubOption.parentTitle === "What to do in Bucharest" && (
            <div>
              <h2>Parties and Events</h2>
              <h3>
                To find information about parties and events happening in
                Bucharest, you can access websites like:
                https://zilesinopti.ro/bucuresti/. Additionally, you can contact
                the SSMB department for more details, tips, and great places
                where you can hang out with friends!
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
