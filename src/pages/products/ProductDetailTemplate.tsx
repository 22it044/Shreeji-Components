import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, Award, Settings } from 'lucide-react';

interface ProductDetailProps {
  title: string;
  description: string;
  lengthSize: string;
  typicalApplication: string;
  threads: string;
  material: string;
  finishAndCoating: string;
  imagePath?: string;
}

const productDetails: Record<string, ProductDetailProps> = {
  'brass-electrical-terminal-parts': {
    title: 'Brass switchgear switches contacts Terminal parts',
    description: 'High-quality brass electrical terminal parts for various applications.',
    lengthSize: 'Begins from M2 - 1\', any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/brass-terminal-connectors.jpg'
  },
  'brass-cross-diamond-knurling-inserts': {
    title: 'Brass cross diamond knurling inserts',
    description: 'Precision-engineered brass cross diamond knurling inserts for industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Cross-Dimond-knurling-inserts.jpg'
  },
  'precise-knurling-inserts': {
    title: 'Precise Knurling Inserts',
    description: 'High-precision knurling inserts for various industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Precise-Knurling-Inserts.jpg'
  },
  'brass-hex-body': {
    title: 'Brass Hex Body',
    description: 'Durable brass hex body components for various industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-hex-body.jpg'
  },
  'brass-special-hex-inserts': {
    title: 'Brass Special Hex Inserts',
    description: 'Specialized brass hex inserts for precision engineering applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Special-Hex-Inserts.jpg'
  },
  'brass-nickel-plated-terminal': {
    title: 'Brass Nickel Plated Terminal',
    description: 'Corrosion-resistant nickel plated brass terminals for electrical applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Nickel-Plated-Terminal.jpg'
  },
  'brass-forging-components': {
    title: 'Brass Forging Components',
    description: 'High-strength brass forging components for industrial applications.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Forging-Components.jpg'
  },
  'brass-hex-critical-npt-thread': {
    title: 'Brass Hex Critical 1/8" NPT Thread',
    description: 'Precision-engineered brass hex components with critical NPT threading.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Instrumentation, Telecommunications, and other Plastic Moulding Assembly.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Crome, Nickle Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Hex-Critical-NPT-Thread.jpg'
  },
  'brass-sensor-temperature-body': {
    title: 'Brass Sensor Temperature Body',
    description: 'Specialized brass components for temperature sensing applications with high thermal conductivity.',
    lengthSize: 'Begins from M2 - 1\' BSP or equivalent threads and up to any size as per customer\'s drawing & standard.',
    typicalApplication: 'Temperature sensors, HVAC systems, Instrumentation, and Industrial monitoring equipment.',
    threads: 'ISO Metric (MM Threads) BA, BSW (Inches), UNC, UNF or As per customer\'s drawing & standard.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Chrome, Nickel Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Sensor-Temperature-Body.jpg'
  },
  'brass-rivets': {
    title: 'Brass Rivets',
    description: 'Durable brass rivets for various fastening applications with excellent corrosion resistance.',
    lengthSize: 'Available in diameters from 1mm to 10mm and lengths from 2mm to 50mm, or custom sizes.',
    typicalApplication: 'Furniture assembly, Leather goods, Decorative applications, Marine equipment, and Electrical connections.',
    threads: 'Solid rivets, Semi-tubular rivets, Bifurcated rivets, or custom designs.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Chrome, Nickel Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Rivets.jpg'
  },
  'brass-pin-molding-inserts': {
    title: 'Brass Pin Molding Inserts',
    description: 'Precision brass pin molding inserts for plastic injection molding applications with superior heat transfer properties.',
    lengthSize: 'Custom sizes from 0.5mm to 50mm diameter with various pin configurations.',
    typicalApplication: 'Plastic injection molding, Die casting, Rubber molding, and Precision component manufacturing.',
    threads: 'Straight, Tapered, Stepped, or custom profile designs as per application requirements.',
    material: 'Brass IS -319 - Type I Free Cutting Type II Brass Forz Material BS-218, Brass Sheet Metal Hard or as per customer\'s drawing & standard.',
    finishAndCoating: 'Natural, Tin, Silver, Gold, Chrome, Nickel Plated or any coating as per customer\'s specification.',
    imagePath: '/images/product_page_images/Brass-Pin-Molding-Inserts.jpg'
  },
};

interface ProductDetailComponentProps {
  productId?: string;
}

const ProductDetail = ({ productId: propProductId }: ProductDetailComponentProps) => {
  const { productId: paramProductId } = useParams<{ productId: string }>();
  const productId = propProductId || paramProductId;
  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">The requested product does not exist.</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfbf8] relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-500/30 to-transparent"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>
      
      <Header />
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Back to Products Button - Improved alignment */}
          <div className="flex justify-between mb-12">
            <Button 
              variant="outline" 
              className="flex items-center space-x-2 border border-amber-500/30 hover:border-amber-500 bg-amber-500/5 shadow-elegant hover:shadow-glow-amber transition-all duration-300 group hover:bg-amber-500 hover:text-white"
              onClick={() => {
                // Store the target section in sessionStorage before navigation
                sessionStorage.setItem('scrollTarget', 'products');
                // Navigate to the home page
                window.location.href = '/';
              }}
            >
              <ArrowLeft className="h-4 w-4 text-amber-500 group-hover:text-white transition-colors" />
              <span className="text-amber-500 group-hover:text-white transition-colors">Back to Products</span>
            </Button>
          
          </div>

          {/* Product Header - Updated with amber theme */}
          <div className="text-center mb-16 relative">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
              <span>{product.title.split(' ').slice(0, -1).join(' ')} <span className="text-amber-500">{product.title.split(' ').pop()}</span></span>
              <div className="h-px w-16 mx-auto mt-6 bg-amber-500"></div>
            </h1>
            <p className="text-lg text-gray-600/90 max-w-3xl mx-auto leading-relaxed font-light">
              {product.description}
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-3 text-sm text-gray-700 bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/20">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-amber-500 mr-1.5" />
                  <span>Premium Quality</span>
                </div>
                <span className="mx-1">•</span>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-amber-500 mr-1.5" />
                  <span>Global Standards</span>
                </div>
                <span className="mx-1">•</span>
                <div className="flex items-center">
                  <Settings className="h-4 w-4 text-amber-500 mr-1.5" />
                  <span>Custom Manufacturing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Content - Changed to vertical layout */}
          <div className="flex flex-col gap-12 mb-16">
            {/* Related Products */}
            
            
            {/* Product Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-elegant group transform hover:scale-[1.02] transition-all duration-500 max-w-4xl mx-auto w-full">
              {product.imagePath ? (
                <div className="relative overflow-hidden">
                  <img 
                    src={product.imagePath} 
                    alt={product.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ) : (
                <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
                  <p className="text-gray-500">Image not available</p>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl p-8 shadow-elegant transform hover:shadow-glow-amber transition-all duration-300 max-w-4xl mx-auto w-full border border-amber-500/10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 border border-amber-500/30 shadow-elegant">
                  <span className="text-amber-500 font-bold">✓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Product Specifications</h2>
                <div className="h-px flex-grow bg-amber-500/30 ml-4"></div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50/50 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-amber-500/10">
                  <h3 className="text-lg font-semibold text-amber-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Length / Size:
                  </h3>
                  <p className="text-gray-700 pl-4">{product.lengthSize}</p>
                </div>
                
                <div className="bg-amber-50/50 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-amber-500/10">
                  <h3 className="text-lg font-semibold text-amber-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Typical Application:
                  </h3>
                  <p className="text-gray-700 pl-4">{product.typicalApplication}</p>
                </div>
                
                <div className="bg-amber-50/50 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-amber-500/10">
                  <h3 className="text-lg font-semibold text-amber-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Threads:
                  </h3>
                  <p className="text-gray-700 pl-4">{product.threads}</p>
                </div>
                
                <div className="bg-amber-50/50 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-amber-500/10">
                  <h3 className="text-lg font-semibold text-amber-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Material:
                  </h3>
                  <p className="text-gray-700 pl-4">{product.material}</p>
                </div>
                
                <div className="bg-amber-50/50 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-amber-500/10">
                  <h3 className="text-lg font-semibold text-amber-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Finish And Coating:
                  </h3>
                  <p className="text-gray-700 pl-4">{product.finishAndCoating}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 bg-gradient-to-r from-amber-50/50 to-transparent p-4 rounded-lg">
                <p className="text-gray-600 italic flex items-start">
                  <span className="text-amber-500 text-xl mr-2">★</span>
                  Exports Enquiry are Highly Solicited, with 100% Timely Shipment, With Fully Documents As Per the Exports Packaging Standards.
                </p>
              </div>
            </div>

<div className="bg-white rounded-xl shadow-elegant p-8 border border-amber-500/10 hover:shadow-glow-amber transition-all duration-300 group max-w-4xl mx-auto w-full">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 border border-amber-500/30 shadow-elegant">
                  <span className="text-amber-500 font-bold">+</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Other Products</h2>
                <div className="h-px flex-grow bg-amber-500/30 ml-4"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(productDetails).map(([id, item]) => (
                  id !== productId && (
                    <Link 
                      key={id} 
                      to={`/products/${id}`} 
                      onClick={() => window.scrollTo(0, 0)}
                      className="group bg-amber-500/5 rounded-lg p-3 hover:bg-amber-500/10 transition-colors duration-300 flex flex-col items-center border border-amber-500/10 hover:border-amber-500/30"
                    >
                      <div className="w-full h-24 overflow-hidden rounded-md mb-2">
                        <img 
                          src={item.imagePath || '/images/placeholder.jpg'} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-xs text-center font-medium text-gray-700 group-hover:text-amber-600 transition-colors duration-300">
                        {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </div>

          </div>

          {/* CTA Section - Improved styling */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-50/80 rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto text-center transform hover:scale-[1.01] transition-all duration-300 border border-amber-500/30">
            <div className="flex items-center justify-center mb-4">
              <div className="w-1 h-6 bg-amber-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                Need <span className="text-amber-600">Custom Specifications</span>?
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our engineering team specializes in developing bespoke manufacturing solutions 
              tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="flex items-center space-x-2 border border-amber-500/30 hover:border-amber-500 bg-amber-600/5 shadow-elegant hover:shadow-glow-amber transition-all duration-300 group hover:bg-amber-500 hover:text-white text-base px-6 py-3 h-auto"
                onClick={() => {
                  // Store the target section in sessionStorage before navigation
                  sessionStorage.setItem('scrollTarget', 'contact');
                  // Navigate to the home page
                  window.location.href = '/';
                }}
              >
                <span className="text-amber-500 group-hover:text-white transition-colors">Request Custom Quote</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center space-x-2 border border-amber-500/30 hover:border-amber-500 bg-amber-600/5 shadow-elegant hover:shadow-glow-amber transition-all duration-300 group hover:bg-amber-500 hover:text-white text-base px-6 py-3 h-auto"
                onClick={() => {
                  // Store the target section in sessionStorage before navigation
                  sessionStorage.setItem('scrollTarget', 'downloads');
                  // Navigate to the home page
                  window.location.href = '/';
                }}
              >
                <span className="text-amber-500 group-hover:text-white transition-colors">Download Catalog</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;