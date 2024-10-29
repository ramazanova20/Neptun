import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './components/Main/Main';

const products={
  "products": [
    {
      "id": 322,
      "img": [
        "https://neptun.az/image/cache/catalog/50_vhed-oo-270x270.jpg?v=9"
      ],
      "name": "Meyve Terevez ALMA CENNET KG",
      "price": 3.5,
      "discount": 10,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "r kimi hər sözə aldanmayır,\nEyləyir ömrün hədər, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nEyləmərəm rəhm onun gözdən axan yaşına,\nBaxsın özündən böyük öz qoçu qardaşına,\nÖlsə də verməm rıza şapqa qoya başına,\nKafir ola bir nəfər, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram",
      "createdAt": "2024-10-04T19:43:57.140Z",
      "updatedAt": "2024-10-05T07:09:17.439Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 3.15
    },
    {
      "id": 323,
      "img": [
        "https://neptun.az/image/cache/catalog/a-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA FUDJI KG",
      "price": 3.99,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "ə üzü gülməsə!\nTa ki, o zehnindəki fikrləri silməsə,\nSanma ola bəxtəvər, oxutmuram, əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nFikrimi verməm əbəs siz kimi nadanlara,\nSövq edəsiz oğlumu bir para hədyanlara,\nÇünki xəyanətçisiz cümlə müsəlmanlara,\nMənzilinizdir səqər, oxutmuram, əl çəkin!\nEyl",
      "createdAt": "2024-10-04T19:43:58.430Z",
      "updatedAt": "2024-10-04T19:43:58.430Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 3.99
    },
    {
      "id": 324,
      "img": [
        "https://neptun.az/image/cache/catalog/Brands/44656545454-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA GOLDEN QIRMIZI KG",
      "price": 4.65,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "əsər, oxutmuram, əl çəkin!\n\nUşaq mənimdir, baba, dəxli nədir sizlərə?\nKim sizi qəyyum edib hökm edəsiz bizlərə?\nYatmaram əsla belə dinə dəyər sözlərə!\nBir kərə qan, müxtəsər, oxutmuram, əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nQoysanız öz oğlumu mən salım öz halimə,\nSənətimi öyrədib, uydu",
      "createdAt": "2024-10-04T19:43:59.079Z",
      "updatedAt": "2024-10-04T19:43:59.079Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 4.65
    },
    {
      "id": 325,
      "img": [
        "https://neptun.az/image/cache/catalog/Brands/545343545615341564534-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA PALMET KG",
      "price": 3.3,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "ə!\nCanıma olsun fəda bir də üzü gülməsə!\nTa ki, o zehnindəki fikrləri silməsə,\nSanma ola bəxtəvər, oxutmuram, əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nFikrimi verməm əbəs siz kimi nadanlara,\nSövq edəsiz oğlumu bir para hədyanlara,\nÇünki xəyanətçisiz cümlə müsəlmanlara,\nMənzilinizdir səqər",
      "createdAt": "2024-10-04T19:43:59.990Z",
      "updatedAt": "2024-10-04T19:43:59.990Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 3.3
    },
    {
      "id": 326,
      "img": [
        "https://neptun.az/image/cache/catalog/jabolka3_original-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA PALMET QIRMIZI KG",
      "price": 3.1,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "mayır,\nSair uşaqlar kimi hər sözə aldanmayır,\nEyləyir ömrün hədər, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nEyləmərəm rəhm onun gözdən axan yaşına,\nBaxsın özündən böyük öz qoçu qardaşına,\nÖlsə də verməm rıza şapqa qoya başına,\nKafir ola bir nəfər, oxutmuram əl çəkin!\nEyləməyin d",
      "createdAt": "2024-10-04T19:44:00.997Z",
      "updatedAt": "2024-10-04T19:44:00.997Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 3.1
    },
    {
      "id": 328,
      "img": [
        "https://neptun.az/image/cache/catalog/meyve-terevez/qizilmehmed-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA QIZIL EHMED KG",
      "price": 6.1,
      "discount": 25,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nQoysanız öz oğlumu mən salım öz halimə,\nSənətimi öyrədib, uydurum əhvalimə,\nDün bu oxutmaq sözün ərz elədim alimə,\nSöylədi : ”haza kəfər…”, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nBəsdi, cəhənnəm olun, bunca ki, aldatmısız,\nİndi",
      "createdAt": "2024-10-04T19:44:03.017Z",
      "updatedAt": "2024-10-05T07:12:13.159Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 4.575
    },
    {
      "id": 329,
      "img": [
        "https://neptun.az/image/cache/catalog/MVT.ALMASEMERINKAXARICIKG-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA SEMERINKA XARICI KG",
      "price": 4.99,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "Eyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nQoysanız öz oğlumu mən salım öz halimə,\nSənətimi öyrədib, uydurum əhvalimə,\nDün bu oxutmaq sözün ərz elədim alimə,\nSöylədi : ”haza kəfər…”, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nBəsdi, cəhənnəm olun, bunca ki, aldatmısız,\nİndi beş ild",
      "createdAt": "2024-10-04T19:44:03.995Z",
      "updatedAt": "2024-10-04T19:44:03.995Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 4.99
    },
    {
      "id": 330,
      "img": [
        "https://neptun.az/image/cache/catalog/b-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA SEMERINKA YERLI KG",
      "price": 2.65,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "ləməyin dəngəsər, oxutmuram, əl çəkin!\n\nUşaq mənimdir, baba, dəxli nədir sizlərə?\nKim sizi qəyyum edib hökm edəsiz bizlərə?\nYatmaram əsla belə dinə dəyər sözlərə!\nBir kərə qan, müxtəsər, oxutmuram, əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nQoysanız öz oğlumu mən salım öz halimə,\nSənətimi ö",
      "createdAt": "2024-10-04T19:44:05.015Z",
      "updatedAt": "2024-10-04T19:44:05.015Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 2.65
    },
    {
      "id": 331,
      "img": [
        "https://neptun.az/image/cache/catalog/Brands/5614624651465465746147684-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA SINAB KG",
      "price": 2.5,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "rəm rəhm onun gözdən axan yaşına,\nBaxsın özündən böyük öz qoçu qardaşına,\nÖlsə də verməm rıza şapqa qoya başına,\nKafir ola bir nəfər, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nUşaq mənimdir, baba, dəxli nədir sizlərə?\nKim sizi qəyyum edib hökm edəsiz bizlərə?\nYatmaram əsla belə d",
      "createdAt": "2024-10-04T19:44:05.993Z",
      "updatedAt": "2024-10-04T19:44:05.993Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 2.5
    },
    {
      "id": 332,
      "img": [
        "https://neptun.az/image/cache/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/MVT.ALMAUCUZN1-270x270.jpg?v=9"
      ],
      "name": "MVT.ALMA UCUZ N1",
      "price": 1.5,
      "discount": 0,
      "categoryId": 1,
      "subcategoryId": 1,
      "description": "tamam dinimə əl qatmısız,\nSevgili övladımı kafirə oxşatmısız,\nDuydum işin sərbəsər, oxutmuram əl çəkin!\nEyləməyin dəngəsər, oxutmuram, əl çəkin!\n\nSatmaram öz əqlimi siz kimi laməzhəbə,\nRazıyam oğlum gedə qəbrə, - nə ki məktəbə!\nMəktəb adın çəkməyin, - mələbədir, mələbə!..\nƏlhəzər, ondan həzər, oxut",
      "createdAt": "2024-10-04T19:44:07.007Z",
      "updatedAt": "2024-10-04T19:44:07.007Z",
      "metadata": "",
      "isTopSelling": false,
      "totalPrice": 1.5
    }
  ],
  "totalProducts": 2111,
  "totalPages": 212,
  "currentPage": 1
}
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Main products={products} />} />
      </Route>
    </Routes>
  );
}

export default App;
