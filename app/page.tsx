import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Zap, Shield, Users } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Alex",
    alias: "The Digital Phantom",
    image: "/images/alex.png",
    hometown: "Neo Tokyo, Japan",
    costume: "Pixelated Stealth Armor with Holographic Interface Gauntlets",
    powers: [
      "Data Stream Manipulation",
      "Digital Camouflage",
      "Code Architecture Visualization",
      "Quantum Computing Interface",
    ],
    bio: "Alex was digitized during a freak accident involving a quantum computer and a cup of coffee. Now existing partially in the digital realm, they can interface directly with any system and see the true structure of code.",
    color: "from-gray-700 to-black",
  },
  {
    name: "Carson",
    alias: "The Charm Champion",
    image: "/images/carson.png",
    hometown: "Nashville, TN",
    costume: "Platinum Performance Suit with Confidence-Boosting Accessories",
    powers: [
      "Irresistible Persuasion",
      "Instant Rapport Building",
      "Presentation Perfect Timing",
      "Client Trust Magnetism",
    ],
    bio: "Carson's powers manifested during his first major presentation when his natural charisma created a literal aura of trust. Clients find themselves saying 'yes' before he even finishes his pitch.",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Angelo",
    alias: "The Vision Virtuoso",
    image: "/images/angelo.png",
    hometown: "Portland, OR",
    costume: "Artistic Blazer of Infinite Patterns with Reality-Bending Glasses",
    powers: [
      "Creative Solution Manifestation",
      "Pattern Recognition Mastery",
      "Innovation Inspiration Aura",
      "Aesthetic Perfection Field",
    ],
    bio: "Angelo's artistic soul merged with pure creative energy during a late-night design session. His glasses now allow him to see the perfect solution to any problem, and his patterns can literally reshape reality.",
    color: "from-purple-600 to-pink-600",
  },
]

export default function MMeastTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            Jordan's Big 3 AE's
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Three awesome AE's extraordinary individuals with incredible powers, united by their mission to deploy the
            future and scale the impossible. Meet the legendary heroes who make Vercel's edge network their playground.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
              <Zap className="w-3 h-3 mr-1" />
              Serverless Powers
            </Badge>
            <Badge variant="outline" className="border-purple-400 text-purple-400 bg-purple-400/10">
              <Users className="w-3 h-3 mr-1" />
              Team Unity
            </Badge>
            <Badge variant="outline" className="border-green-400 text-green-400 bg-green-400/10">
              <Shield className="w-3 h-3 mr-1" />
              Client Protection
            </Badge>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <CardContent className="p-6 relative z-10">
                {/* Hero Image */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-600 group-hover:border-slate-400 transition-colors duration-300">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                </div>

                {/* Hero Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                    {member.alias}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mt-2">
                    <MapPin className="w-3 h-3" />
                    {member.hometown}
                  </div>
                </div>

                {/* Costume */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                    Signature Costume
                  </h4>
                  <p className="text-sm text-gray-400 italic">{member.costume}</p>
                </div>

                {/* Powers */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Super Powers
                  </h4>
                  <div className="space-y-1">
                    {member.powers.map((power, powerIndex) => (
                      <div key={powerIndex} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${member.color}`}></div>
                        {power}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">Origin Story</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Meme Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <Image
              src="/images/office-meme.png"
              alt="The Office meme - Corporate needs you to find the difference between this picture and this picture. They're the same picture."
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">MMeast Super Team</span>
          </div>
          <p className="text-gray-400 mb-6">
            Protecting the web, one deployment at a time. Powered by Vercel's edge network.
          </p>
          <div className="text-sm text-gray-500">© 2024 MMeast Division - Vercel Account Executive Heroes</div>
        </div>
      </div>
    </div>
  )
}
