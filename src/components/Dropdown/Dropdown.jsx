import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronRight, BiMenuAltLeft } from "react-icons/bi";

// Sample data for dropdown
const categories = [
  {
    "id": 1,
    "categoryName": "Meyvə, tərəvəz, quru meyvə",
    "subcategory": [
      {
        "id": 1,
        "categoryName": "meyvə",
        "slug": "meyvə-tərəvəz-quru-meyvə/meyvə"
      },
      {
        "id": 2,
        "categoryName": "tərəvəz",
        "slug": "meyvə-tərəvəz-quru-meyvə/tərəvəz"
      },
      {
        "id": 3,
        "categoryName": "göyərti",
        "slug": "meyvə-tərəvəz-quru-meyvə/göyərti"
      }
    ]
  },
  {
    "id": 2,
    "categoryName": "Ət, toyuq, dəniz məhsulları",
    "subcategory": [
      {
        "id": 4,
        "categoryName": "toyuq",
        "slug": "ət-toyuq-dəniz-məhsulları/toyuq"
      },
      {
        "id": 5,
        "categoryName": "dəniz məhsulları",
        "slug": "ət-toyuq-dəniz-məhsulları/dəniz-məhsulları"
      }
    ]
  },
  {
    "id": 3,
    "categoryName": "Qastronom",
    "subcategory": [
      {
        "id": 6,
        "categoryName": "kolbasa və sosislər",
        "slug": "qastronom/kolbasa-və-sosislər"
      },
      {
        "id": 7,
        "categoryName": "donmuş məhsullar",
        "slug": "qastronom/donmuş-məhsullar"
      }
    ]
  },
  {
    "id": 4,
    "categoryName": "Ərzaq məhsulları",
    "subcategory": [
      {
        "id": 8,
        "categoryName": "dənlilər",
        "slug": "ərzaq-məhsulları/dənlilər"
      },
      {
        "id": 9,
        "categoryName": "unlar",
        "slug": "ərzaq-məhsulları/unlar"
      },
      {
        "id": 10,
        "categoryName": "ədviyyatlar",
        "slug": "ərzaq-məhsulları/ədviyyatlar"
      },
      {
        "id": 11,
        "categoryName": "souslar",
        "slug": "ərzaq-məhsulları/souslar"
      },
      {
        "id": 12,
        "categoryName": "turşular",
        "slug": "ərzaq-məhsulları/turşular"
      },
      {
        "id": 13,
        "categoryName": "zeytunlar",
        "slug": "ərzaq-məhsulları/zeytunlar"
      },
      {
        "id": 14,
        "categoryName": "balıq konservləri",
        "slug": "ərzaq-məhsulları/balıq-konservləri"
      },
      {
        "id": 15,
        "categoryName": "konservlər",
        "slug": "ərzaq-məhsulları/konservlər"
      },
      {
        "id": 16,
        "categoryName": "hazır yeməklər",
        "slug": "ərzaq-məhsulları/hazır-yeməklər"
      },
      {
        "id": 17,
        "categoryName": "tərəvəz konservləri",
        "slug": "ərzaq-məhsulları/tərəvəz-konservləri"
      },
      {
        "id": 18,
        "categoryName": "qatılaşdırılmış süd",
        "slug": "ərzaq-məhsulları/qatılaşdırılmış-süd"
      }
    ]
  },
  {
    "id": 5,
    "categoryName": "Şirniyyat, çay, kofe, diabetik",
    "subcategory": [
      {
        "id": 19,
        "categoryName": "şirniyyat",
        "slug": "şirniyyat-çay-kofe-diabetik/şirniyyat"
      },
      {
        "id": 20,
        "categoryName": "quru meyvə paketli",
        "slug": "şirniyyat-çay-kofe-diabetik/quru-meyvə-paketli"
      },
      {
        "id": 21,
        "categoryName": "saqqızlar",
        "slug": "şirniyyat-çay-kofe-diabetik/saqqızlar"
      },
      {
        "id": 22,
        "categoryName": "çörək",
        "slug": "şirniyyat-çay-kofe-diabetik/çörək"
      },
      {
        "id": 23,
        "categoryName": "diabetik",
        "slug": "şirniyyat-çay-kofe-diabetik/diabetik"
      },
      {
        "id": 24,
        "categoryName": "nescake",
        "slug": "şirniyyat-çay-kofe-diabetik/nescake"
      }
    ]
  },
  {
    "id": 6,
    "categoryName": "İçkilər",
    "subcategory": [
      {
        "id": 25,
        "categoryName": "çay",
        "slug": "içkilər/çay"
      },
      {
        "id": 26,
        "categoryName": "kofe, kakao və s.",
        "slug": "içkilər/kofe-kakao-və-s."
      },
      {
        "id": 27,
        "categoryName": "meyvə suları",
        "slug": "içkilər/meyvə-suları"
      },
      {
        "id": 28,
        "categoryName": "kompotlar",
        "slug": "içkilər/kompotlar"
      },
      {
        "id": 29,
        "categoryName": "sular",
        "slug": "içkilər/sular"
      },
      {
        "id": 30,
        "categoryName": "kolalar",
        "slug": "içkilər/kolalar"
      },
      {
        "id": 31,
        "categoryName": "soyuq çay",
        "slug": "içkilər/soyuq-çay"
      },
      {
        "id": 32,
        "categoryName": "enerji içəcək",
        "slug": "içkilər/enerji-içəcək"
      },
      {
        "id": 33,
        "categoryName": "araq",
        "slug": "içkilər/araq"
      },
      {
        "id": 34,
        "categoryName": "şərab",
        "slug": "içkilər/şərab"
      },
      {
        "id": 35,
        "categoryName": "pivə",
        "slug": "içkilər/pivə"
      },
      {
        "id": 36,
        "categoryName": "şampan",
        "slug": "içkilər/şampan"
      },
      {
        "id": 37,
        "categoryName": "konyak",
        "slug": "içkilər/konyak"
      },
      {
        "id": 38,
        "categoryName": "viski,tekila və s.",
        "slug": "içkilər/viskitekila-və-s."
      }
    ]
  },
  {
    "id": 7,
    "categoryName": "Süd məhsulları",
    "subcategory": [
      {
        "id": 39,
        "categoryName": "yağlar",
        "slug": "süd-məhsulları/yağlar"
      },
      {
        "id": 40,
        "categoryName": "ayran",
        "slug": "süd-məhsulları/ayran"
      },
      {
        "id": 41,
        "categoryName": "südlər",
        "slug": "süd-məhsulları/südlər"
      },
      {
        "id": 42,
        "categoryName": "şor",
        "slug": "süd-məhsulları/şor"
      },
      {
        "id": 43,
        "categoryName": "dovğa",
        "slug": "süd-məhsulları/dovğa"
      },
      {
        "id": 44,
        "categoryName": "kəsmik",
        "slug": "süd-məhsulları/kəsmik"
      },
      {
        "id": 45,
        "categoryName": "kefir",
        "slug": "süd-məhsulları/kefir"
      },
      {
        "id": 46,
        "categoryName": "kokteyllər",
        "slug": "süd-məhsulları/kokteyllər"
      },
      {
        "id": 47,
        "categoryName": "pendirlər",
        "slug": "süd-məhsulları/pendirlər"
      },
      {
        "id": 48,
        "categoryName": "qatıq",
        "slug": "süd-məhsulları/qatıq"
      },
      {
        "id": 49,
        "categoryName": "qaymaq",
        "slug": "süd-məhsulları/qaymaq"
      },
      {
        "id": 50,
        "categoryName": "xama",
        "slug": "süd-məhsulları/xama"
      }
    ]
  },
  {
    "id": 8,
    "categoryName": "Uşaq məhsulları",
    "subcategory": [
      {
        "id": 51,
        "categoryName": "oyuncaqlar",
        "slug": "uşaq-məhsulları/oyuncaqlar"
      },
      {
        "id": 52,
        "categoryName": "uşaq bezləri",
        "slug": "uşaq-məhsulları/uşaq-bezləri"
      },
      {
        "id": 53,
        "categoryName": "uşaq ləvazimatları",
        "slug": "uşaq-məhsulları/uşaq-ləvazimatları"
      },
      {
        "id": 54,
        "categoryName": "uşaq pudrası",
        "slug": "uşaq-məhsulları/uşaq-pudrası"
      },
      {
        "id": 55,
        "categoryName": "uşaq sabunları",
        "slug": "uşaq-məhsulları/uşaq-sabunları"
      },
      {
        "id": 56,
        "categoryName": "uşaq şampunları",
        "slug": "uşaq-məhsulları/uşaq-şampunları"
      },
      {
        "id": 57,
        "categoryName": "uşaq tekstili",
        "slug": "uşaq-məhsulları/uşaq-tekstili"
      },
      {
        "id": 58,
        "categoryName": "uşaq üçün yuyucu tozlar",
        "slug": "uşaq-məhsulları/uşaq-üçün-yuyucu-tozlar"
      }
    ]
  },
  {
    "id": 9,
    "categoryName": "Yuyucu,təmizləyici vasitələr",
    "subcategory": [
      {
        "id": 59,
        "categoryName": "paltarlar üçün",
        "slug": "yuyucutəmizləyici-vasitələr/paltarlar-üçün"
      },
      {
        "id": 60,
        "categoryName": "qab yumaq üçün",
        "slug": "yuyucutəmizləyici-vasitələr/qab-yumaq-üçün"
      }
    ]
  },
  {
    "id": 10,
    "categoryName": "Kosmetik və gigiyenik",
    "subcategory": [
      {
        "id": 61,
        "categoryName": "ağız baxımı",
        "slug": "kosmetik-və-gigiyenik/ağız-baxımı"
      },
      {
        "id": 62,
        "categoryName": "antiperspirant",
        "slug": "kosmetik-və-gigiyenik/antiperspirant"
      },
      {
        "id": 63,
        "categoryName": "aseton",
        "slug": "kosmetik-və-gigiyenik/aseton"
      },
      {
        "id": 64,
        "categoryName": "təraş ləvazimatları",
        "slug": "kosmetik-və-gigiyenik/təraş-ləvazimatları"
      },
      {
        "id": 65,
        "categoryName": "təravətləndiricilər",
        "slug": "kosmetik-və-gigiyenik/təravətləndiricilər"
      },
      {
        "id": 66,
        "categoryName": "dezodorant",
        "slug": "kosmetik-və-gigiyenik/dezodorant"
      },
      {
        "id": 67,
        "categoryName": "duş gelləri",
        "slug": "kosmetik-və-gigiyenik/duş-gelləri"
      },
      {
        "id": 68,
        "categoryName": "kağız məhsulları",
        "slug": "kosmetik-və-gigiyenik/kağız-məhsulları"
      },
      {
        "id": 69,
        "categoryName": "kolonyalar",
        "slug": "kosmetik-və-gigiyenik/kolonyalar"
      },
      {
        "id": 70,
        "categoryName": "kosmetik",
        "slug": "kosmetik-və-gigiyenik/kosmetik"
      },
      {
        "id": 71,
        "categoryName": "kremlər",
        "slug": "kosmetik-və-gigiyenik/kremlər"
      },
      {
        "id": 72,
        "categoryName": "losyonlar",
        "slug": "kosmetik-və-gigiyenik/losyonlar"
      },
      {
        "id": 73,
        "categoryName": "makiyaj diski",
        "slug": "kosmetik-və-gigiyenik/makiyaj-diski"
      },
      {
        "id": 74,
        "categoryName": "mövsümi məhsullar",
        "slug": "kosmetik-və-gigiyenik/mövsümi-məhsullar"
      },
      {
        "id": 75,
        "categoryName": "nəm salfetlər",
        "slug": "kosmetik-və-gigiyenik/nəm-salfetlər"
      },
      {
        "id": 76,
        "categoryName": "otaq təravətləndirici",
        "slug": "kosmetik-və-gigiyenik/otaq-təravətləndirici"
      },
      {
        "id": 77,
        "categoryName": "qadın məhsulları",
        "slug": "kosmetik-və-gigiyenik/qadın-məhsulları"
      },
      {
        "id": 78,
        "categoryName": "qulaq çubuğu",
        "slug": "kosmetik-və-gigiyenik/qulaq-çubuğu"
      },
      {
        "id": 79,
        "categoryName": "sabunlar",
        "slug": "kosmetik-və-gigiyenik/sabunlar"
      },
      {
        "id": 80,
        "categoryName": "saç baxımı",
        "slug": "kosmetik-və-gigiyenik/saç-baxımı"
      }
    ]
  },
  {
    "id": 11,
    "categoryName": "Məişət, mətbəx, tekstil",
    "subcategory": [
      {
        "id": 81,
        "categoryName": "bayram aksessuarları",
        "slug": "məişət-mətbəx-tekstil/bayram-aksessuarları"
      },
      {
        "id": 82,
        "categoryName": "batareya",
        "slug": "məişət-mətbəx-tekstil/batareya"
      },
      {
        "id": 83,
        "categoryName": "corablar",
        "slug": "məişət-mətbəx-tekstil/corablar"
      },
      {
        "id": 84,
        "categoryName": "plastik qablar",
        "slug": "məişət-mətbəx-tekstil/plastik-qablar"
      },
      {
        "id": 85,
        "categoryName": "qab-qacaq",
        "slug": "məişət-mətbəx-tekstil/qab-qacaq"
      },
      {
        "id": 86,
        "categoryName": "məişət məhsulları",
        "slug": "məişət-mətbəx-tekstil/məişət-məhsulları"
      },
      {
        "id": 87,
        "categoryName": "həşəratlara qarşı",
        "slug": "məişət-mətbəx-tekstil/həşəratlara-qarşı"
      },
      {
        "id": 88,
        "categoryName": "ayaqqabı ləvazimatları",
        "slug": "məişət-mətbəx-tekstil/ayaqqabı-ləvazimatları"
      }
    ]
  },
  {
    "id": 12,
    "categoryName": "Konselyariya",
    "subcategory": [
      {
        "id": 89,
        "categoryName": "dəftər",
        "slug": "konselyariya/dəftər"
      }
    ]
  },
  {
    "id": 13,
    "categoryName": "Heyvan yemləri",
    "subcategory": []
  },
  {
    "id": 14,
    "categoryName": "Yalnız Neptunda",
    "subcategory": []
  },
  {
    "id": 15,
    "categoryName": "Elektronika & Mebel",
    "subcategory": []
  },
  {
    "id": 16,
    "categoryName": "Kampaniyalar",
    "subcategory": []
  }
]

function MultiLevelDropdown() {
  const [isMultiDropdownOpen, setIsMultiDropdownOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMultiDropdown = () => setIsMultiDropdownOpen((prev) => !prev);
  
  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleMultiDropdown} className="flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5">
        {isMultiDropdownOpen }
        <BiMenuAltLeft className="text-[#FF8300] block lg:hidden" />  
        <GiHamburgerMenu className="text-[#FF8300] hidden lg:block" />
        <span className="text-[#FF8300] hidden lg:block">Kateqoriyalar</span>
      </button>

      {isMultiDropdownOpen && (
        <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md z-10">
          <ul className="py-2 text-sm text-gray-700">
            {categories.map((category) => (
              <li key={category.id} className="relative">
                <button
                  onClick={() => toggleSubmenu(category.id)}
                  className="flex justify-between w-full px-4 py-2 text-left hover:bg-gray-100 border-b"
                >
                  <span>{category.categoryName}</span>
                  <BiChevronRight className={`${openSubmenus[category.id] ? 'rotate-90' : ''} transition-transform`} />
                </button>

                {openSubmenus[category.id] && (
                  <div className="pl-6 left-full top-0 ml-2 w-44">
                    {category.subcategory.map((subcat) => (
                      <a 
                        key={subcat.id} 
                        href={subcat.slug} 
                        className="block px-4 py-2 text-gray-700 left-full top-0 ml-2 w-44 hover:bg-gray-100"
                      >
                        {subcat.categoryName}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MultiLevelDropdown;
