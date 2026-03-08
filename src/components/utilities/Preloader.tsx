const Preloader = () => {
    return (
        <div id="preloader">
            <div className="preloader-inner">
                {/* Code bracket animation */}
                <div className="preloader-code-wrap">
                    <span className="bracket bracket-left">&lt;</span>
                    <div className="preloader-logo-text">
                        <span className="logo-letter" style={{ animationDelay: '0.1s' }}>O</span>
                        <span className="logo-letter" style={{ animationDelay: '0.15s' }}>u</span>
                        <span className="logo-letter" style={{ animationDelay: '0.2s' }}>t</span>
                        <span className="logo-letter" style={{ animationDelay: '0.25s' }}>C</span>
                        <span className="logo-letter" style={{ animationDelay: '0.3s' }}>o</span>
                        <span className="logo-letter" style={{ animationDelay: '0.35s' }}>d</span>
                        <span className="logo-letter" style={{ animationDelay: '0.4s' }}>e</span>
                    </div>
                    <span className="bracket bracket-right">/&gt;</span>
                </div>

                {/* Progress bar */}
                <div className="preloader-progress">
                    <div className="preloader-progress-bar"></div>
                </div>

                {/* Subtle tagline */}
                <p className="preloader-tagline">Out Think. Out Work. Out Perform.</p>

                {/* Floating particles */}
                <div className="preloader-particles">
                    <span className="particle" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></span>
                    <span className="particle" style={{ top: '60%', left: '80%', animationDelay: '0.3s' }}></span>
                    <span className="particle" style={{ top: '35%', left: '70%', animationDelay: '0.6s' }}></span>
                    <span className="particle" style={{ top: '75%', left: '25%', animationDelay: '0.9s' }}></span>
                    <span className="particle" style={{ top: '10%', left: '55%', animationDelay: '0.4s' }}></span>
                    <span className="particle" style={{ top: '85%', left: '60%', animationDelay: '0.7s' }}></span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;