'use client';

import { useEffect } from 'react';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen';
import styles from './ContactMap.module.css';

const ContactMap = () => {
  const position: LatLngExpression = [55.994446, 92.797586];
  const markerPosition: LatLngExpression = [55.994446, 92.797586];

  const markerIcon = new L.Icon({
    iconUrl: '/location.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  useEffect(() => {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const map = L.map(mapElement, {
      center: position,
      zoom: 13,
    } as any);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    (L.control as any).fullscreen({ position: 'topleft' }).addTo(map);

    const marker = L.marker(markerPosition, { icon: markerIcon });
    marker.bindPopup('DI&AR, Ресторан высокой кухни').addTo(map);

    return () => {
      map.remove();
    };
  }, [position, markerPosition, markerIcon]);

  return (
    <div className={styles.contactMap}>
      <div className={styles.contactMap__garland}>
        <img src="/garland.png" alt="Garland" className={styles.contactMap__garlandImage} />
      </div>

      <div className={styles.contactMap__background} />

      <div className={styles.contactMap__content}>
        <div className={styles.contactMap__left}>
          <h2 className={styles.contactMap__title}>Наши контакты</h2>
          <p className={styles.contactMap__phone}>+7 (123) 456-78-90</p>
          <p className={styles.contactMap__address}>г. Красноярск, ул. Примерная, 123</p>
          <div className={styles.contactMap__social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className={styles.contactMap__socialIcon} />
            </a>
            <a href="https://vk.com/ness90" target="_blank" rel="noopener noreferrer">
              <img src="/vk.png" alt="VK" className={styles.contactMap__socialIcon} />
            </a>
            <a href="https://t.me/Ness91" target="_blank" rel="noopener noreferrer">
              <img src="/telegram.png" alt="Telegram" className={styles.contactMap__socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.contactMap__right}>
          <div id="map" className={styles.contactMap__map} />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;