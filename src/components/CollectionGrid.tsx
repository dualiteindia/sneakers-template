// Renamed collections to American themes
const collections = [
  {
    id: 1,
    name: "Canyon Series",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-01_18_25-AM.webp", // Set 1
  },
  {
    id: 2,
    name: "Frontier Collection",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-28-2026-11_11_55-PM.webp", // Set 2
  },
  {
    id: 3,
    name: "Heritage X Liberty",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_17-AM.webp", // Set 3
  },
  {
    id: 4,
    name: "Summit Collection",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/sneakers/ChatGPT-Image-Jan-29-2026-02_10_30-AM.webp", // Set 4
  },
];

export const CollectionGrid = () => {
  return (
    <section className="bg-white border-b border-heritage-charcoal/5">
      {/* Header */}
      <div className="border-b border-heritage-charcoal/5 px-6 md:px-8 py-8 flex justify-between items-center">
        <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-heritage-charcoal uppercase tracking-tight">
          Shop By Collection
        </h2>
        <div className="hidden md:flex gap-2">
          <span className="text-heritage-charcoal/40 text-xs">←</span>
          <span className="text-heritage-charcoal/40 text-xs">→</span>
        </div>
      </div>

      {/* Static Grid - Enforced lg:grid-cols-4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-heritage-charcoal/5">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="relative group p-8 pb-12 flex flex-col justify-between min-h-[400px]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-sans text-lg font-bold text-heritage-charcoal uppercase tracking-wide">
                {collection.name}
              </h3>
            </div>

            {/* Image */}
            <div className="flex-grow flex items-center justify-center mb-6">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-auto max-h-[200px] object-contain mix-blend-multiply filter contrast-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

