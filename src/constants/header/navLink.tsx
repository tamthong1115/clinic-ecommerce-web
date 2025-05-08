import PublicPaths from '../../routes/public/pathPublic';

export const navLink = [
  {
    nameLink: 'Dịch vụ',
    routerLink: PublicPaths.SPECIALITY,
  },
  {
    nameLink: 'Đặt lịch',
    routerLink: PublicPaths.BOOKING,
  },
  {
    nameLink: 'Thuốc',
    routerLink: PublicPaths.MEDICINE,
    item: [
      { name: 'Thực phẩm chức năng', link: '/' },
      { name: 'Thực phẩm bổ sung', link: '/' },
      { name: 'Thuốc điều trị', link: '/' },
    ],
  },
  {
    nameLink: 'Hợp tác',
    routerLink: PublicPaths.COOPERATE,
    item: [
      { name: 'Dịch vụ nhi đồng', link: '/' },
      { name: 'Dịch vụ sản khoa', link: '/' },
      { name: 'Dịch vụ người cao tuổi', link: '/' },
    ],
  },
  {
    nameLink: 'Về chúng tôi',
    item: [
      { name: 'Dành cho bệnh nhân', link: '/about-for-patient' },
      { name: 'Dành cho bác sĩ', link: '/about-for-doctor' },
      { name: 'Liên hệ', link: '/about-for-contact' },
    ],
  },
];
