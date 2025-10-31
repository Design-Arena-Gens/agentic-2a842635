import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const beautyStartups = [
  { name: "Minimalist", handle: "@beminimalist", followers: "1.2M", niche: "Skincare", description: "Science-backed skincare solutions" },
  { name: "Plum Goodness", handle: "@plumgoodness", followers: "890K", niche: "Beauty & Skincare", description: "100% vegan beauty products" },
  { name: "MyGlamm", handle: "@myglamm", followers: "2.1M", niche: "Makeup & Beauty", description: "Digital-first beauty brand" },
  { name: "Sugar Cosmetics", handle: "@sugarcosmetics", followers: "1.8M", niche: "Makeup", description: "Long-lasting makeup products" },
  { name: "Mamaearth", handle: "@mamaearth_india", followers: "1.5M", niche: "Natural Beauty", description: "Toxin-free beauty & wellness" },
  { name: "Dot & Key", handle: "@dotandkey", followers: "650K", niche: "Skincare", description: "Korean beauty inspired skincare" },
  { name: "Pilgrim", handle: "@pilgrimproducts", followers: "420K", niche: "Skincare", description: "Travel-inspired beauty brand" },
  { name: "The Derma Co", handle: "@thedermaco", followers: "580K", niche: "Dermatology", description: "Dermatologist-formulated skincare" },
  { name: "Juicy Chemistry", handle: "@juicychemistry", followers: "310K", niche: "Organic Skincare", description: "100% organic & handmade" },
  { name: "Wow Skin Science", handle: "@wowskinscienceindia", followers: "720K", niche: "Haircare & Skincare", description: "Natural beauty solutions" },
  { name: "MCaffeine", handle: "@mcaffeine", followers: "490K", niche: "Caffeine-based Beauty", description: "Caffeine-infused personal care" },
  { name: "The Face Shop India", handle: "@thefaceshopindia", followers: "380K", niche: "K-Beauty", description: "Korean beauty products" },
  { name: "Bella Vita Organic", handle: "@bellavitaorganic", followers: "550K", niche: "Organic Beauty", description: "Luxury organic beauty" },
  { name: "St.Botanica", handle: "@stbotanica", followers: "290K", niche: "Natural Beauty", description: "Botanical beauty products" },
  { name: "mCaffeine", handle: "@mcaffeine_official", followers: "520K", niche: "Personal Care", description: "India's first caffeinated brand" },
  { name: "Nykaa Cosmetics", handle: "@nykaacosmetics", followers: "940K", niche: "Beauty & Makeup", description: "Indian beauty retailer brand" },
  { name: "Organic Harvest", handle: "@organicharvest", followers: "270K", niche: "Organic Beauty", description: "Certified organic beauty" },
  { name: "Arata", handle: "@shopwitharata", followers: "180K", niche: "Haircare", description: "Natural haircare solutions" },
  { name: "Fixderma", handle: "@fixderma", followers: "410K", niche: "Dermatology", description: "Dermatological skincare" },
  { name: "Disguise Cosmetics", handle: "@disguisecosmetics", followers: "330K", niche: "Makeup", description: "High-pigment makeup" },
  { name: "Renee Cosmetics", handle: "@reneecosmetics", followers: "620K", niche: "Makeup", description: "Bold makeup collection" },
  { name: "Swiss Beauty", handle: "@swissbeautyindia", followers: "780K", niche: "Makeup", description: "Affordable makeup brand" },
  { name: "Carmesi", handle: "@livecarmesi", followers: "150K", niche: "Feminine Care", description: "Period & intimate care" },
  { name: "Pee Safe", handle: "@peesafe", followers: "240K", niche: "Hygiene Products", description: "Personal hygiene solutions" },
  { name: "The Moms Co", handle: "@themomsco", followers: "320K", niche: "Mom & Baby Care", description: "Natural baby & mom products" },
  { name: "Bombay Shaving Company", handle: "@bombayshavingcompany", followers: "440K", niche: "Men's Grooming", description: "Men's grooming essentials" },
  { name: "Beardo", handle: "@beardoofficial", followers: "590K", niche: "Men's Grooming", description: "Men's beard & grooming" },
  { name: "The Man Company", handle: "@themancompany", followers: "380K", niche: "Men's Grooming", description: "Premium men's grooming" },
  { name: "Ustraa", handle: "@ustraa", followers: "470K", niche: "Men's Grooming", description: "Indian men's grooming brand" },
  { name: "mCaffeine Men", handle: "@mcaffeine_men", followers: "210K", niche: "Men's Skincare", description: "Caffeinated men's care" },
  { name: "Soulflower", handle: "@soulflower_india", followers: "280K", niche: "Natural Beauty", description: "Aromatherapy & natural beauty" },
  { name: "Greenberry Organics", handle: "@greenberryorganics", followers: "160K", niche: "Organic Skincare", description: "100% natural & organic" },
  { name: "Earth Rhythm", handle: "@earthrhythm", followers: "390K", niche: "Natural Skincare", description: "Clean & sustainable beauty" },
  { name: "Ruby's Organics", handle: "@rubysorganics", followers: "140K", niche: "Organic Beauty", description: "Handmade organic products" },
  { name: "Indulgeo Essentials", handle: "@indulgeoessentials", followers: "120K", niche: "Handmade Beauty", description: "Luxury handmade products" },
  { name: "Nat Habit", handle: "@nathabit", followers: "170K", niche: "Natural Beauty", description: "Ayurvedic beauty solutions" },
  { name: "Vedix", handle: "@vedixofficial", followers: "250K", niche: "Ayurvedic Haircare", description: "Customized ayurvedic care" },
  { name: "Kama Ayurveda", handle: "@kama.ayurveda", followers: "340K", niche: "Ayurvedic Beauty", description: "Premium ayurvedic beauty" },
  { name: "Forest Essentials", handle: "@forestessentialsindia", followers: "460K", niche: "Luxury Ayurveda", description: "Luxury ayurvedic beauty" },
  { name: "Biotique", handle: "@biotiqueindia", followers: "370K", niche: "Ayurvedic Beauty", description: "Bio-ayurvedic products" },
  { name: "Khadi Natural", handle: "@khadinaturalofficial", followers: "190K", niche: "Herbal Beauty", description: "Herbal beauty products" },
  { name: "SoulTree", handle: "@soultree_india", followers: "130K", niche: "Ayurvedic Beauty", description: "Certified organic ayurveda" },
  { name: "Just Herbs", handle: "@justherbsindia", followers: "220K", niche: "Ayurvedic Beauty", description: "Luxury ayurvedic cosmetics" },
  { name: "Tvam", handle: "@tvam_naturals", followers: "95K", niche: "Natural Beauty", description: "Handmade natural products" },
  { name: "The Nature's Co", handle: "@thenaturesco", followers: "310K", niche: "Natural Beauty", description: "Nature-inspired beauty" },
  { name: "Azafran Organics", handle: "@azafranorganics", followers: "180K", niche: "Organic Skincare", description: "Pure organic skincare" },
  { name: "Clovia", handle: "@cloviaworld", followers: "420K", niche: "Intimate Wear & Care", description: "Women's intimate wellness" },
  { name: "Plix", handle: "@plixlife", followers: "360K", niche: "Beauty Nutrition", description: "Plant-based beauty supplements" },
  { name: "Bodywise", handle: "@bybodywise", followers: "280K", niche: "Women's Health", description: "Women's wellness & beauty" },
  { name: "Good Glamm Group", handle: "@goodglammgroup", followers: "520K", niche: "Beauty Conglomerate", description: "House of beauty brands" }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterNiche, setFilterNiche] = useState('All');

  const niches = ['All', ...new Set(beautyStartups.map(brand => brand.niche))];

  const filteredStartups = beautyStartups.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = filterNiche === 'All' || brand.niche === filterNiche;
    return matchesSearch && matchesNiche;
  });

  const exportToCSV = () => {
    const headers = ['Brand Name', 'Instagram Handle', 'Followers', 'Niche', 'Description'];
    const rows = filteredStartups.map(brand => [
      brand.name,
      brand.handle,
      brand.followers,
      brand.niche,
      brand.description
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'indian-beauty-startups-leads.csv';
    a.click();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Indian Beauty Startups - Instagram Leads</title>
        <meta name="description" content="50 Indian beauty product startups on Instagram for social media agency leads" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🇮🇳 Indian Beauty Startups on Instagram
        </h1>
        <p className={styles.subtitle}>
          50 curated beauty product startups for your social media agency
        </p>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Search brands, handles, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />

          <select
            value={filterNiche}
            onChange={(e) => setFilterNiche(e.target.value)}
            className={styles.filterSelect}
          >
            {niches.map(niche => (
              <option key={niche} value={niche}>{niche}</option>
            ))}
          </select>

          <button onClick={exportToCSV} className={styles.exportButton}>
            📥 Export to CSV
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{filteredStartups.length}</div>
            <div className={styles.statLabel}>Brands</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{niches.length - 1}</div>
            <div className={styles.statLabel}>Categories</div>
          </div>
        </div>

        <div className={styles.grid}>
          {filteredStartups.map((brand, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>{brand.name}</h2>
                <span className={styles.badge}>{brand.niche}</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.handle}>
                  <a
                    href={`https://instagram.com/${brand.handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {brand.handle}
                  </a>
                </p>
                <p className={styles.followers}>👥 {brand.followers} followers</p>
                <p className={styles.description}>{brand.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <a
                  href={`https://instagram.com/${brand.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitButton}
                >
                  Visit Instagram →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Lead generation tool for social media agencies • {beautyStartups.length} Indian beauty startups curated</p>
      </footer>
    </div>
  );
}
