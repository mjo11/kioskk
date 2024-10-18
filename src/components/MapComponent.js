import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './MapComponent.css';

const MapComponent = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const openModal = (roomId) => {
    setActiveRoom(roomId);
  };

  const closeModal = () => {
    setActiveRoom(null);
  };

  const [isPdfModalOpen, setPdfModalOpen] = useState(false);
  const openPdfModal = () => {
    setPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setPdfModalOpen(false);
  };

  const [isOrgChartModalOpen, setOrgChartModalOpen] = useState(false);
  const openOrgChartModal = () => {
    setOrgChartModalOpen(true);
  };

  const closeOrgChartModal = () => {
    setOrgChartModalOpen(false);
  };

  // Handle Survey button click by navigating to the SurveyForm component
  const handleSurveyFormNavigation = () => {
    navigate('/survey-form'); // Navigate to the SurveyForm component
  };
  
  return (
    <div className="map-container">
      {/* Left Container for Map 1 */}
      <div className="map-box">
        <h2>First Floor</h2>
        <button className="BCK"> <a href="/">BACK</a></button>
        <div className="floorplan-container">
          <img src={require ('./maps/Map.jpg')} alt="Map 1 Floor Plan" className="floorplan-image" />
          <button 
            className="label-button" 
            style={{ top: '68%', left: '7%' }} 
            onClick={() => openModal('Room1')}>
            MISO
          </button>

          <button 
            className="label-button" 
            style={{ top: '57%', left: '5%' }} 
            onClick={() => openModal('Room2')}>
            CCTV<br/>CONTROL<br/>ROOM
          </button>

          <button 
            className="label-button" 
            style={{ top: '40%', left: '6%' }} 
            onClick={() => openModal('Room3')}>
            CITY BUDGET <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '31%', left: '6%' }} 
            onClick={() => openModal('Room4')}>
            CITY <br/> ACCOUNTING <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '26%', left: '6%' }} 
            onClick={() => openModal('Room5')}>
            ACCOUNTING
          </button>

          <button 
            className="label-button" 
            style={{ top: '18%', left: '11%' }} 
            onClick={() => openModal('Room6')}>
            CPDO
          </button>

          <button 
            className="label-button" 
            style={{ top: '10%', left: '6%' }} 
            onClick={() => openModal('Room7')}>
            CUDHO/<br/>ZONING
          </button>

          <button 
            className="label-button" 
            style={{ top: '11%', left: '15%' }} 
            onClick={() => openModal('Room8')}>
           
          </button>

          <button 
            className="label-button" 
            style={{ top: '11%', left: '82%' }} 
            onClick={() => openModal('Room9')}>
            CITY ENGINEER <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '26%', left: '86%' }} 
            onClick={() => openModal('Room10')}>
            OBO
          </button>

          <button 
            className="label-button" 
            style={{ top: '32%', left: '83%' }} 
            onClick={() => openModal('Room11')}>
            LCR<br/>(ARCHIVE)
          </button>

          <button 
            className="label-button" 
            style={{ top: '40%', left: '86%' }} 
            onClick={() => openModal('Room12')}>
            LCR
          </button>

          <button 
            className="label-button" 
            style={{ top: '52%', left: '79%' }} 
            onClick={() => openModal('Room13')}>
            CITY ASSESSORS <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '55%', left: '49%' }} 
            onClick={() => openModal('Room14')}>
            CITY<br/>TREASURER<br/>OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '56%', left: '25%' }} 
            onClick={() => openModal('Room15')}>
            BPLO
          </button>

          <button 
            className="label-button" 
            style={{ top: '87%', left: '28%' }} 
            onClick={() => openModal('Room16')}>
            OFFICE OF THE<br/>CITY MAYOR
          </button>

        </div>
      </div>

      {/* Right Container for Map 2 */}
      <div className="map1-box">
        <h2>Second Floor</h2>
        <div className="floorplan-container">
        <img src={require ('./maps/Map2.jpg')} alt="Map 1 Floor Plan" className="floorplan-image" />
          
        <button 
            className="label-button" 
            style={{ top: '69%', left: '12%' }} 
            onClick={() => openModal('Room17')}>
            CIO
        </button>

        <button 
            className="label-button" 
            style={{ top: '57%', left: '14%' }} 
            onClick={() => openModal('Room18')}>
            DILG
        </button>

        <button 
            className="label-button" 
            style={{ top: '48%', left: '10%' }} 
            onClick={() => openModal('Room19')}>
            CHRMO
        </button>

        <button 
            className="label-button" 
            style={{ top: '39%', left: '8%' }} 
            onClick={() => openModal('Room20')}>
            INDIGENCY
        </button>

        <button 
            className="label-button" 
            style={{ top: '32%', left: '11%' }} 
            onClick={() => openModal('Room21')}>
            OSWD
        </button>

        <button 
            className="label-button" 
            style={{ top: '19%', left: '9%' }} 
            onClick={() => openModal('Room22')}>
            TRAINING <br/> CENTER
        </button>

        <button 
            className="label-button" 
            style={{ top: '7%', left: '7%' }} 
            onClick={() => openModal('Room23')}>
            POPCOM
        </button>

        <button 
            className="label-button" 
            style={{ top: '27%', left: '43%' }} 
            onClick={() => openModal('Room')}>
            OPEN SPACE
        </button>

        <button 
            className="label-button" 
            style={{ top: '8%', left: '82%' }} 
            onClick={() => openModal('Room24')}>
            BAC/ CEO
        </button>

        <button 
            className="label-button" 
            style={{ top: '79%', left: '82%' }} 
            onClick={() => openModal('Room')}>
            RAMP
        </button>

        <button 
            className="label-button" 
            style={{ top: '67%', left: '65%' }} 
            onClick={() => openModal('Room25')}>
            HRM
        </button>

        <button 
            className="label-button" 
            style={{ top: '67%', left: '51%' }} 
            onClick={() => openModal('Room26')}>
            TSO
        </button>

        <button 
            className="label-button" 
            style={{ top: '65%', left: '36%' }} 
            onClick={() => openModal('Room27')}>
            CENRO
        </button>

        <button 
            className="label-button" 
            style={{ top: '71%', left: '36%' }} 
            onClick={() => openModal('Room28')}>
            SWMO
        </button>

        </div>
      </div>

      {/*Modals*/}
      {activeRoom === 'Room1' && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-left">
              <img src={require('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
            </div>
            <div className="modal-right">
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={require('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
              <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
              <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
              <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
            </div>
          </div>
        </div>
      )}

          {/* PDF Modal */}
          {isPdfModalOpen && (
              <div className="modal">
                <div className="modal-content pdf-modal">
                  <span className="close" onClick={closePdfModal}>&times;</span>
                  <iframe
                    src={require('./CitizenCharter/CC2024.pdf')}
                    title="Citizen's Charter PDF"
                    className="pdf-viewer"
                  ></iframe>
                </div>
              </div>
            )}

              {/* OrgChart Modal */}
              {isOrgChartModalOpen && (
                <div className="modal">
                  <div className="modal-content OrgChart-modal">
                    <span className="close" onClick={closeOrgChartModal}>&times;</span>
                    <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                  </div>
                </div>
              )}



      {activeRoom === 'Room2' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 2 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 2 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

            {/* PDF Modal */}
            {isPdfModalOpen && (
                <div className="modal">
                  <div className="modal-content pdf-modal">
                    <span className="close" onClick={closePdfModal}>&times;</span>
                    <iframe
                      src={require('./CitizenCharter/CC2024.pdf')}
                      title="Citizen's Charter PDF"
                      className="pdf-viewer"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* OrgChart Modal */}
              {isOrgChartModalOpen && (
                <div className="modal">
                  <div className="modal-content OrgChart-modal">
                    <span className="close" onClick={closeOrgChartModal}>&times;</span>
                    <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                  </div>
                </div>
              )}



      {activeRoom === 'Room3' && (
        <div className="modal">
            <div className="modal-content">
              <div className="modal-left">
                <img src={require('./maps/MISO.jpg')} alt="Room 3 Path" className="modal-office" />
              </div>
              <div className="modal-right">
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={require('./officer/1.jpg')} alt="Room 3 Info" className="modal-image" />
                <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
                <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
                <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
              </div>
            </div>
          </div>
        )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
          <div className="modal">
            <div className="modal-content pdf-modal">
              <span className="close" onClick={closePdfModal}>&times;</span>
              <iframe
                src={require('./CitizenCharter/CC2024.pdf')}
                title="Citizen's Charter PDF"
                className="pdf-viewer"
              ></iframe>
            </div>
          </div>
        )}

        {/* OrgChart Modal */}
        {isOrgChartModalOpen && (
          <div className="modal">
            <div className="modal-content OrgChart-modal">
              <span className="close" onClick={closeOrgChartModal}>&times;</span>
              <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
            </div>
          </div>
        )}



      {activeRoom === 'Room4' && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-left">
                  <img src={require('./maps/MISO.jpg')} alt="Room 4 Path" className="modal-office" />
                </div>
                <div className="modal-right">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <img src={require('./officer/1.jpg')} alt="Room 4 Info" className="modal-image" />
                  <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
                  <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
                  <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
                </div>
              </div>
            </div>
          )}

            {/* PDF Modal */}
            {isPdfModalOpen && (
                <div className="modal">
                  <div className="modal-content pdf-modal">
                    <span className="close" onClick={closePdfModal}>&times;</span>
                    <iframe
                      src={require('./CitizenCharter/CC2024.pdf')}
                      title="Citizen's Charter PDF"
                      className="pdf-viewer"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* OrgChart Modal */}
              {isOrgChartModalOpen && (
                <div className="modal">
                  <div className="modal-content OrgChart-modal">
                    <span className="close" onClick={closeOrgChartModal}>&times;</span>
                    <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                  </div>
                </div>
              )}


      {activeRoom === 'Room5' && (
             <div className="modal">
              <div className="modal-content">
                <div className="modal-left">
                  <img src={require('./maps/MISO.jpg')} alt="Room 5 Path" className="modal-office" />
                </div>
                <div className="modal-right">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <img src={require('./officer/1.jpg')} alt="Room 5 Info" className="modal-image" />
                  <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
                  <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
                  <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
                </div>
              </div>
            </div>
          )}

            {/* PDF Modal */}
            {isPdfModalOpen && (
              <div className="modal">
                <div className="modal-content pdf-modal">
                  <span className="close" onClick={closePdfModal}>&times;</span>
                  <iframe
                    src={require('./CitizenCharter/CC2024.pdf')}
                    title="Citizen's Charter PDF"
                    className="pdf-viewer"
                  ></iframe>
                </div>
              </div>
            )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}



      {activeRoom === 'Room6' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 6 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 6 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}


      {activeRoom === 'Room7' && (
            <div className="modal">
            <div className="modal-content">
              <div className="modal-left">
                <img src={require('./maps/MISO.jpg')} alt="Room 7 Path" className="modal-office" />
              </div>
              <div className="modal-right">
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={require('./officer/1.jpg')} alt="Room 7 Info" className="modal-image" />
                <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
                <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
                <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
              </div>
            </div>
          </div>
        )}
  
            {/* PDF Modal */}
            {isPdfModalOpen && (
                <div className="modal">
                  <div className="modal-content pdf-modal">
                    <span className="close" onClick={closePdfModal}>&times;</span>
                    <iframe
                      src={require('./CitizenCharter/CC2024.pdf')}
                      title="Citizen's Charter PDF"
                      className="pdf-viewer"
                    ></iframe>
                  </div>
                </div>
              )}
  
                {/* OrgChart Modal */}
                {isOrgChartModalOpen && (
                  <div className="modal">
                    <div className="modal-content OrgChart-modal">
                      <span className="close" onClick={closeOrgChartModal}>&times;</span>
                      <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                    </div>
                  </div>
                )}
  

      
      {activeRoom === 'Room8' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 8 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 8 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}


      {activeRoom === 'Room9' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 9 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 9 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}



      {activeRoom === 'Room10' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 10 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 10 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}


    {activeRoom === 'Room11' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 11 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 11 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}



      {activeRoom === 'Room12' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 12 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 12 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}



      {activeRoom === 'Room13' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 13 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 13 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}

      {activeRoom === 'Room14' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 14 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 14 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}



      {activeRoom === 'Room15' && (
         <div className="modal">
         <div className="modal-content">
           <div className="modal-left">
             <img src={require('./maps/MISO.jpg')} alt="Room 15 Path" className="modal-office" />
           </div>
           <div className="modal-right">
             <span className="close" onClick={closeModal}>&times;</span>
             <img src={require('./officer/1.jpg')} alt="Room 15 Info" className="modal-image" />
             <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
             <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
             <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
           </div>
         </div>
       </div>
     )}

         {/* PDF Modal */}
         {isPdfModalOpen && (
             <div className="modal">
               <div className="modal-content pdf-modal">
                 <span className="close" onClick={closePdfModal}>&times;</span>
                 <iframe
                   src={require('./CitizenCharter/CC2024.pdf')}
                   title="Citizen's Charter PDF"
                   className="pdf-viewer"
                 ></iframe>
               </div>
             </div>
           )}

             {/* OrgChart Modal */}
             {isOrgChartModalOpen && (
               <div className="modal">
                 <div className="modal-content OrgChart-modal">
                   <span className="close" onClick={closeOrgChartModal}>&times;</span>
                   <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                 </div>
               </div>
             )}


      {activeRoom === 'Room16' && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-left">
            <img src={require('./maps/MISO.jpg')} alt="Room 16 Path" className="modal-office" />
          </div>
          <div className="modal-right">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={require('./officer/1.jpg')} alt="Room 16 Info" className="modal-image" />
            <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
            <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
            <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button> {/* New button */}
          </div>
        </div>
      </div>
    )}

        {/* PDF Modal */}
        {isPdfModalOpen && (
            <div className="modal">
              <div className="modal-content pdf-modal">
                <span className="close" onClick={closePdfModal}>&times;</span>
                <iframe
                  src={require('./CitizenCharter/CC2024.pdf')}
                  title="Citizen's Charter PDF"
                  className="pdf-viewer"
                ></iframe>
              </div>
            </div>
          )}

            {/* OrgChart Modal */}
            {isOrgChartModalOpen && (
              <div className="modal">
                <div className="modal-content OrgChart-modal">
                  <span className="close" onClick={closeOrgChartModal}>&times;</span>
                  <img src={require('./OrgChart/MISstaff.jpg')} title="Org Chart" className="Org-Chart" />
                </div>
              </div>
            )}

      {activeRoom === 'Room17' && (
            <div className="modal">
            <div className="modal-content">
              <div className='modal-left'>
                  <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
              </div>
              <div className='modal-right'>
                  <span className="close" onClick={closeModal}>&times;</span>
                  <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
                  <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
                  <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
              </div>
            </div>
          </div>
      )}

            {/* PDF Modal */}
            {isPdfModalOpen && (
                <div className="modal">
                  <div className="modal-content pdf-modal">
                    <span className="close" onClick={closePdfModal}>&times;</span>
                    <iframe
                      src={require('./CitizenCharter/CC2024.pdf')}
                      title="Citizen's Charter PDF"
                      className="pdf-viewer"
                    ></iframe>
                  </div>
                </div>
              )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


    {activeRoom === 'Room18' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


  {activeRoom === 'Room19' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


{activeRoom === 'Room20' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


{activeRoom === 'Room21' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


{activeRoom === 'Room22' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}

      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


{activeRoom === 'Room23' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


    {activeRoom === 'Room24' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


    {activeRoom === 'Room25' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}

    
      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}



    {activeRoom === 'Room26' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


{activeRoom === 'Room27' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}


      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}


{activeRoom === 'Room28' && (
        <div className="modal">
        <div className="modal-content">
          <div className='modal-left'>
              <img src={require ('./maps/MISO.jpg')} alt="Room 1 Path" className="modal-office" />
           </div>
          <div className='modal-right'>
              <span className="close" onClick={closeModal}>&times;</span>
               <img src={require ('./officer/1.jpg')} alt="Room 1 Info" className="modal-image" />
               <button className='CCharter' onClick={openPdfModal}>Citizen's Charter</button>
               <button className='OrgChart' onClick={openOrgChartModal}>Organizational's Chart</button>
           </div>
         </div>
       </div>
    )}

   {/* PDF Modal */}
   {isPdfModalOpen && (
      <div className="modal">
        <div className="modal-content pdf-modal">
          <span className="close" onClick={closePdfModal}>&times;</span>
          <iframe
            src={require('./CitizenCharter/CC2024.pdf')}
            title="Citizen's Charter PDF"
            className="pdf-viewer"
          ></iframe>
        </div>
      </div>
    )}

      {/* OrgChart Modal */}
      {isOrgChartModalOpen && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
             <img src={require('./OrgChart/MISstaff.jpg')}
              title="Org Chart"
              className="Org-Chart"/>
          </div>
        </div>
      )}



    </div>
  );
};

export default MapComponent;
