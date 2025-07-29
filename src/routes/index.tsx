import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
   <div> 
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-snowflake-line text-primary text-xl"></i>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">Rontardio</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#tokenomics" className="text-gray-600 hover:text-primary transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-gray-600 hover:text-primary transition-colors">Roadmap</a>
            <a href="#media" className="text-gray-600 hover:text-primary transition-colors">Media</a>
          </nav>
          <button className="bg-primary text-white px-6 py-2 !rounded-button hover:bg-blue-600 transition-colors whitespace-nowrap">
            <a href="https://app.roninchain.com/swap?outputCurrency=0xB5d3541EA8aa7E4Ad8Bb9A9764D36E48ff27e5d4" className="block w-full h-full">
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </header>
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: "url('landing/millio-1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-gray-600/50 to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="w-full max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 icy-text drop-shadow-2xl drop-shadow-black/50 text-center sm:text-left">
              Rontardio
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Join the coolest Rontardio in the crypto world on an epic memes
              adventure. Discover treasures, build communities, and explore the
              Ronin Network of Web3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 !rounded-button text-lg font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"><a href="https://www.geckoterminal.com/ronin/pools/0x2e8fc6f0324ab7da9f60c68164e285d729da2f23">Coin Info</a>
              </button>
              <button className="border-2 border-primary bg-black/60 text-primary px-8 py-4 !rounded-button text-lg font-semibold hover:bg-primary hover:text-white transition-colors whitespace-nowrap"><a href="https://app.roninchain.com/swap?outputCurrency=0xB5d3541EA8aa7E4Ad8Bb9A9764D36E48ff27e5d4">Buy Now</a>
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-96 h-96 relative floating-animation">
            <img src="landing/millio-3.png" alt="Arctic Pablo Mascot" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
    {/* About Section */}
    <section id="about" className="py-20 bg-gradient-to-b from-blue-200 to-blue-300 relative overflow-hidden">
      <div className="absolute inset-0" style={{backgroundImage: "url('landing/millio-4.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.5"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 icy-text">ABOUT</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Rontardio : 
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Rontardio is a community-driven memecoin launched on the Ronin Blockchain, known for being fast, low-cost, and gaming-friendly. It has no serious financial or utility value—it's purely for fun, speculation, and building community hype (just like Dogecoin or Shiba Inu started)
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Rontardio is a meme-based cryptocurrency token built on the Ronin Blockchain — a popular Ethereum-compatible blockchain created for building gaming Chain  . Rontardio is a fun, experimental coin that combines humor and community culture with Ronin blockchain technology.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <i className="ri-shield-check-line text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Audited &amp; Secure</h4>
                  <p className="text-sm text-gray-600">
                    Smart contracts verified by leading security Ronin
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img src="landing/millio-5.png" alt="Angel Pablo" className="w-80 h-80 object-contain floating-animation" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Tokenomics Section */}
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-blue-300 to-blue-400 relative overflow-hidden">
      <div className="absolute inset-0" style={{backgroundImage: "url('landing/millio-2.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.2"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 icy-text">
            TOKEN INFO
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Token Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Token Name</span>
                  <span className="font-semibold text-gray-800">Rontardio</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Symbol</span>
                  <span className="font-semibold text-gray-800">$RONTARDIO</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Network</span>
                  <span className="font-semibold text-gray-800">Ronin</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-semibold text-gray-800">1,000,000,000 (1 billion)</span>
                </div>
                <div className="flex items-center py-3">
                  <span className="text-gray-600 mr-2 ">Contract Address</span>
                  <div className="flex-1 flex items-center justify-end">
                    <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono text-gray-800 max-w-[200px] overflow-auto bg-gray-200 p-2">0xb5d3541ea8aa7e4ad8bb9a9764d36e48ff27e5d4</code>
                    <button className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => navigator.clipboard.writeText('0xb5d3541ea8aa7e4ad8bb9a9764d36e48ff27e5d4')}>
                      <i className="ri-file-copy-line text-gray-600"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Token Features
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-lock-line text-primary text-2xl mb-2"></i>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Liquidity Locked
                  </h4>
                  <p className="text-sm text-gray-600">Lock Ronin Period</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-shield-check-line text-primary text-2xl mb-2"></i>
                  <h4 className="font-semibold text-gray-800 mb-1">Audited</h4>
                  <p className="text-sm text-gray-600">By Ronin</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-coins-line text-primary text-2xl mb-2"></i>
                  <h4 className="font-semibold text-gray-800 mb-1">Build Rontardio</h4>
                  <p className="text-sm text-gray-600">RoninChain</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-fire-line text-primary text-2xl mb-2"></i>
                  <h4 className="font-semibold text-gray-800 mb-1">Token Burn</h4>
                  <p className="text-sm text-gray-600">Community Dev Burns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">How to Buy</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Download Ronin Wallet
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Download and install Ronin Wallet on Play Store and Create or add your wallet
                    </p>
                    <div className="flex space-x-3">
                      <img src="landing/Ronin.webp" alt="Ronin Wallet" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Deposit Ronin</h4>
                    <p className="text-gray-600 mb-2">
                      Purchase Ronin from an Crypto exchange and transfer it to your Ronin Wallet, example Binance to Ronin Wallet
                    </p>
                    <div className="flex space-x-3">
                      <i className="ri-ethereum-fill text-[#627EEA] text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Swap Ronin for $RONTARDIO
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Enter the token contract address and swap your Ronin for $RONTARDIO tokens
                    </p>
                    <div className="flex space-x-3">
                      <i className="ri-apps-fill text-[#FF007A] text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Congratulations $RONTARDIO 
                    </h4>
                    <p className="text-gray-600">
                      Welcome to Rontardio community! You can now hold, trade, and enjoy the fun of being part of this memecoin adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">Process</h4>
                <a href="#" className="text-primary hover:text-blue-600 transition-colors text-sm">View All</a>
              </div>
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <i className="ri-apps-fill text-[#FF007A] text-3xl mb-2"></i>
                  <p className="text-sm font-medium text-gray-800">Download</p>
                </div>
                <div className="text-center">
                  <i className="ri-pie-chart-2-fill text-[#00C0C4] text-3xl mb-2"></i>
                  <p className="text-sm font-medium text-gray-800">Deposit Ronin</p>
                </div>
                <div className="text-center">
                  <i className="ri-exchange-fill text-[#F0B90B] text-3xl mb-2"></i>
                  <p className="text-sm font-medium text-gray-800">Swap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Roadmap Section */}
    <section id="roadmap" className="py-20 bg-gradient-to-b from-blue-400 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0" style={{backgroundImage: "url('landing/millio-6.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.2"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 icy-text">ROADMAP</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl slide-in">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-full mb-6 mx-auto">
              <i className="ri-rocket-line text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Phase 1: Launch
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                Token deployment
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                Community building
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                Initial partnerships
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Exchange listings
              </li>
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl slide-in">
            <div className="w-16 h-16 flex items-center justify-center bg-secondary/20 rounded-full mb-6 mx-auto">
              <i className="ri-gamepad-line text-secondary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Phase 2: Ecosystem
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Rontardio NFT on Ronmillio
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Collaborations with Ronin projects
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Grow more Together
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Build Ronin Network Together
              </li>
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl slide-in">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400/20 rounded-full mb-6 mx-auto">
              <i className="ri-global-line text-yellow-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Phase 3:Rontardio Moon
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <i className="ri-time-line text-gray-400 mr-2"></i>
                Market Cap growth : 100K Soon Together
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-gray-400 mr-2"></i>
                Market Cap growth : 1M Soon Together
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-gray-400 mr-2"></i>
                Market Cap growth : 10M Soon Together
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-gray-400 mr-2"></i>
                Market Cap growth : 100M Soon Together
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Media Section */}
    <section id="media" className="py-20 bg-gradient-to-b from-blue-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0" style={{backgroundImage: "url('landing/millio-7.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.2"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 icy-text">
           SOCIAL MEDIA
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4 mx-auto">
              <a href="https://x.com/Rontardio_CT" target="_blank" rel="noopener noreferrer">
                <img src="landing/Twitter.avif" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Twitter</h3>
            <p className="text-sm text-gray-600">
              Official Twitter Account for updates and community engagement
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
              <a href="https://opensea.io/collection/ronmillio" target="_blank" rel="noopener noreferrer">
                <img src="landing/Ronmillio.jpg" alt="Ronmillio" className="w-6 h-6" />
              </a>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Ronmillio - NFTs</h3>
            <p className="text-sm text-gray-600">
              Official NFT partnership Collaborations
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4 mx-auto">
              <a href="https://www.tiktok.com/@rontardio_cto?_t=ZS-8yPr6P1Kejy&_r=1" target="_blank" rel="noopener noreferrer">
                <img src="landing/TikTok.png" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Tik Tok</h3>
            <p className="text-sm text-gray-600">More Rontardio fun and engaging content</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4 mx-auto">
              <a href="https://discord.gg/pAzg4ktB" target="_blank" rel="noopener noreferrer">
                <img src="landing/Discord.png" alt="Discord" className="w-6 h-6" />
              </a>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Discord</h3>
            <p className="text-sm text-gray-600">Talk to the team and community for Rontardio grow Together</p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="landing/millio-8.png" className="w-full max-w-2xl h-64 object-contain floating-animation" />
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer className="bg-blue-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{backgroundImage: "url('landing/millio-9.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.3"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-snowflake-line text-primary text-xl"></i>
              </div>
              <span className="ml-2 text-xl font-bold"> Rontardio</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Join the coolest Rontardio in the crypto world and explore the
              endless possibilities of the clown metaverse.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#tokenomics" className="text-blue-200 hover:text-white transition-colors">Tokenomics</a>
              </li>
              <li>
                <a href="#roadmap" className="text-blue-200 hover:text-white transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#media" className="text-blue-200 hover:text-white transition-colors">Media</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/pAzg4ktB" className="text-blue-200 hover:text-white transition-colors">Discord</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@rontardio_cto?_t=ZS-8yPr6P1Kejy&amp;_r=1" className="text-blue-200 hover:text-white transition-colors">TikTok</a>
              </li>
              <li>
                <a href="https://x.com/Rontardio_CT" className="text-blue-200 hover:text-white transition-colors">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/Ronin_Network" className="text-blue-200 hover:text-white transition-colors">RONIN</a>
              </li>
              <li>
                <a href="https://roninchain.com/" className="text-blue-200 hover:text-white transition-colors">RoninChain</a>
              </li>
              <li>
                <a href="https://rontardio.com/" className="text-blue-200 hover:text-white transition-colors">Rontardio</a>
              </li>
              <li>
                <a href="https://x.com/RaiyanWeb3" className="text-blue-200 hover:text-white transition-colors">Raiyan [Web Builder]</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="https://x.com/Rontardio_CT" className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full hover:bg-blue-700 transition-colors">
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a href="https://discord.gg/HZwCq9s7Ux" className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full hover:bg-blue-700 transition-colors">
                <i className="ri-discord-fill text-white"></i>
              </a>
            </div>
            <div className="flex items-center">
              <img src="landing/millio-10.png" alt="Skiing Pablo" className="w-16 h-16 object-contain mr-4" />
              <p className="text-blue-200 text-sm">
                © 2025 Arctic Rontardio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
   </div>
  );
}
