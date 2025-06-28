
export const Pdf = () => {
  return (
  <>
  
   <div className="header">
        <div className="decorative-border"></div>
        <h1>This is <span className="set-text">set I</span> of sight word worksheets. This set of worksheets is <span className="set-text">editable</span>!</h1>
        <div className="decorative-border"></div>
        <div className="star-badge star-left">220 Pages!</div>
        <div className="star-badge star-right">Editable!</div>
    </div>
    
    <div className="worksheets-container">
        {/* <!-- Left Worksheet --> */}
        <div className="worksheet">
            <div className="worksheet-header">
                <div className="word-display">and</div>
                <div className="name-field">Name: <span className="name-line"></span></div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Trace it:</div>
                <div className="trace-area">and and and</div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Write it:</div>
                <div className="write-lines"></div>
                <div className="write-lines"></div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Color it:</div>
                <div className="color-section">
                    <div className="color-word">and</div>
                    <div className="color-word">and</div>
                </div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Find it:</div>
                <div className="word-grid">
                    <div className="word-cell">go</div>
                    <div className="word-cell target">and</div>
                    <div className="word-cell">make</div>
                    <div className="word-cell">it</div>
                    <div className="word-cell">said</div>
                    <div className="word-cell target">and</div>
                    <div className="word-cell">come</div>
                    <div className="word-cell">the</div>
                    <div className="word-cell target">and</div>
                    <div className="word-cell">look</div>
                    <div className="word-cell target">and</div>
                    <div className="word-cell">is</div>
                    <div className="word-cell">me</div>
                    <div className="word-cell target">and</div>
                    <div className="word-cell">my</div>
                    <div className="word-cell">can</div>
                    <div className="word-cell target">and</div>
                    <div className="word-cell">see</div>
                </div>
            </div>
            
            <div className="match-section">
                <div className="activity-label">Match the picture to the letter with the same beginning sound:</div>
                <div className="letter-boxes">
                    <div className="letter-box">a</div>
                    <div className="letter-box">n</div>
                    <div className="letter-box">d</div>
                </div>
            </div>
            
            <div className="cut-section">
                <div>✂️ Cut and paste</div>
                <div className="cut-images">
                    <div className="cut-image">🍎</div>
                    <div className="cut-image">🎁</div>
                    <div className="cut-image">🐕</div>
                </div>
            </div>
        </div>
        
        {/* <!-- Right Worksheet --> */}
        <div className="worksheet">
            <div className="worksheet-header">
                <div className="word-display">them</div>
                <div className="name-field">Name: <span className="name-line"></span></div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Trace it:</div>
                <div className="trace-area">them them</div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Write it:</div>
                <div className="write-lines"></div>
                <div className="write-lines"></div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Color it:</div>
                <div className="color-section">
                    <div className="color-word">them</div>
                    <div className="color-word">them</div>
                </div>
            </div>
            
            <div className="activity-section">
                <div className="activity-label">Find it:</div>
                <div className="word-grid">
                    <div className="word-cell target">them</div>
                    <div className="word-cell">just</div>
                    <div className="word-cell">when</div>
                    <div className="word-cell">put</div>
                    <div className="word-cell">were</div>
                    <div className="word-cell target">them</div>
                    <div className="word-cell">had</div>
                    <div className="word-cell">as</div>
                    <div className="word-cell target">them</div>
                    <div className="word-cell">from</div>
                    <div className="word-cell target">them</div>
                    <div className="word-cell">how</div>
                    <div className="word-cell">any</div>
                    <div className="word-cell target">them</div>
                    <div className="word-cell">take</div>
                    <div className="word-cell target">them</div>
                    <div className="word-cell">again</div>
                    <div className="word-cell">then</div>
                </div>
            </div>
            
            <div className="match-section">
                <div className="activity-label">Match the picture to the letter with the same beginning sound:</div>
                <div className="letter-boxes">
                    <div className="letter-box">t</div>
                    <div className="letter-box">h</div>
                    <div className="letter-box">e</div>
                    <div className="letter-box">m</div>
                </div>
            </div>
            
            <div className="cut-section">
                <div>✂️ Cut and paste</div>
                <div className="cut-images">
                    <div className="cut-image">🌳</div>
                    <div className="cut-image">🏠</div>
                    <div className="cut-image">🥚</div>
                    <div className="cut-image">🐭</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
