import { Trophy, Calendar, MapPin, Users, Gift, ExternalLink, Facebook, Mail } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#9B5DE0] rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D78FEE] rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo Placeholder */}
          <div className="mb-8 flex justify-center">
            <img src="/image/codenexus_logo.png" alt="CodeNexus Logo" className="w-32 h-32 rounded-2xl glow-purple"/>
          </div>

          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#4E56C0]/20 border border-[#4E56C0] rounded-full text-sm font-semibold text-[#FDCFFA] mb-4">
              SEASON 4
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">Code Nexus</span>
            <br />
            <span className="text-white">Esports League</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            A METAfied Season is Here!
          </p>

          {/* Powered by TNC Group */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <p className="text-gray-400 text-lg">Powered by</p>
            <img src="/image/tnc_logo.png" alt="TNC Group Logo" className="h-8 object-contain" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-[#FDCFFA]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">November 19-21, 2025</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-[#9B5DE0] rounded-full"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">10:00 AM - 7:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://tinyurl.com/registerolopscmlt2025"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 glow-purple flex items-center justify-center gap-2"
            >
              Register Your Team
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="https://tinyurl.com/infoolopscmlt2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-[#9B5DE0] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Details
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Powered By */}
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <span className="text-sm">Powered by</span>
            <div className="w-24 h-12 bg-white/5 border border-[#4E56C0]/30 rounded-lg flex items-center justify-center text-xs font-bold text-[#D78FEE]">
              TNC GROUP
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4E56C0] rounded-full blur-[150px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">Prize Pool</span>
            </h2>
            <p className="text-xl text-gray-400">Compete for glory and amazing prizes!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Champion */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#4E56C0]/20 to-[#9B5DE0]/10 backdrop-blur-sm border-2 border-[#FDCFFA] rounded-3xl p-8 relative overflow-hidden glow-pink">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDCFFA] rounded-full blur-[80px] opacity-20"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-[#FDCFFA] text-sm font-semibold mb-1">CHAMPION</div>
                    <div className="text-5xl font-black text-white">₱5,000</div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-gray-300 text-lg">+ Exclusive Champion Trophy</p>
                </div>
              </div>
            </div>

            {/* Other Prizes */}
            <PrizeCard place="1st" amount="3,500" color="#9B5DE0" />
            <PrizeCard place="2nd" amount="2,000" color="#D78FEE" />
            <PrizeCard place="3rd" amount="1,000" color="#FDCFFA" />
            <PrizeCard place="4th" amount="500" color="#4E56C0" />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#9B5DE0]/20 to-[#D78FEE]/20 backdrop-blur-sm border border-[#D78FEE] rounded-2xl p-6">
              <Gift className="w-8 h-8 text-[#FDCFFA] mx-auto mb-3" />
              <p className="text-lg font-semibold text-white mb-1">More Exciting Prizes!</p>
              <p className="text-gray-400">From our amazing sponsors & raffle prizes for viewers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#4E56C0]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Event <span className="text-gradient">Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard
              icon={<Trophy className="w-8 h-8" />}
              title="Competitive Tournament"
              description="Battle against the best Mobile Legends teams in an epic 3-day tournament"
            />
            <HighlightCard
              icon={<Gift className="w-8 h-8" />}
              title="Viewer Raffles"
              description="Exciting prizes for spectators and supporters throughout the event"
            />
            <HighlightCard
              icon={<Users className="w-8 h-8" />}
              title="Community Celebration"
              description="Join fellow gamers in the biggest OLOPSC esports event of the year"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12">
            <span className="text-gradient">Partners & Organizers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <SponsorCard title="Powered by" name={<img src="/image/tnc_logo.png" alt="TNC Group Logo" className="h-full object-contain" />} />
            <SponsorCard title="Marketing Partner" name="Raelevant Marketing" />
            <SponsorCard title="Organized by" name="JPCS - Olopsc OCS" />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#9B5DE0]/30 rounded-2xl p-8">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              This year, the OLOPSC Mobile Legends Tournament Season 4: Code Nexus Esports League is proudly powered by the <span className="text-[#FDCFFA] font-semibold">TNC Group</span>, a name that has become synonymous with esports excellence in the Philippines.
            </p>
            <p className="text-2xl font-bold text-gradient">Join our tournament and become a legend!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 gradient-primary blur-[150px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to <span className="text-gradient">Compete?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Register your team now and secure your spot in the most exciting Mobile Legends tournament of the year!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://tinyurl.com/registerolopscmlt2025"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-200 glow-purple flex items-center justify-center gap-2"
            >
              Register Now
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <a
              href="https://www.facebook.com/olopscmlt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FDCFFA] transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Follow us on Facebook</span>
            </a>
            <div className="hidden sm:block w-1 h-1 bg-[#9B5DE0] rounded-full"></div>
            <a
              href="mailto:olopscmlt@gmail.com"
              className="flex items-center gap-2 hover:text-[#FDCFFA] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>olopscmlt@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#FDCFFA]">Quick Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Quick Questions: Facebook Page</p>
                <p>General: olopscmlt@gmail.com</p>
                <p>Partnership: olopscmlt.mktg@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#FDCFFA]">Important Links</h3>
              <div className="space-y-2 text-sm">
                <a href="https://tinyurl.com/registerolopscmlt2025" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#D78FEE] transition-colors">Registration Form</a>
                <a href="https://tinyurl.com/infoolopscmlt2025" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#D78FEE] transition-colors">Complete Information</a>
                <a href="https://www.facebook.com/olopscmlt" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#D78FEE] transition-colors">Facebook Page</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#FDCFFA]">Event Hashtags</h3>
              <div className="flex flex-wrap gap-2">
                {['#IamTHEGame', '#CodeNexusLeague', '#OLOPSCMLT2025', '#TNC'].map(tag => (
                  <span key={tag} className="text-xs bg-[#4E56C0]/20 border border-[#4E56C0] px-3 py-1 rounded-full text-[#D78FEE]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2025 OLOPSC Computer Society. All rights reserved.
            </p>
            <a href="https://terd.zentariph.com" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 text-gray-400 text-sm hover:text-gray-400 transition-colors duration-200 z-50 flex items-center gap-1">
              Developed by Terd <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

function PrizeCard({ place, amount, color }: { place: string; amount: string; color: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#9B5DE0] transition-all duration-300 hover:scale-105">
      <div className="text-center">
        <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}>
          <Trophy className="w-8 h-8" style={{ color }} />
        </div>
        <div className="text-gray-400 text-sm font-semibold mb-2">{place} PLACE</div>
        <div className="text-3xl font-black text-white">₱{amount}</div>
      </div>
    </div>
  );
}

function HighlightCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#9B5DE0] transition-all duration-300">
      <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function SponsorCard({ title, name }: { title: string; name: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-[#4E56C0]/30 rounded-2xl p-6">
      <p className="text-gray-400 text-sm mb-3">{title}</p>
      <div className="w-full h-24 bg-white/5 border border-[#9B5DE0]/30 rounded-xl flex items-center justify-center">
        {name}
      </div>
    </div>
  );
}

export default App;
