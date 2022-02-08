export const getData = (airData: number):string => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const dateCounts = String(airData).split('-').map(date => Number(date));
  const [month, day, year] = dateCounts;
  return `${day} ${monthNames[month]} ${year}`
}
