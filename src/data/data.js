let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
  
  export function getInvoices() {
    return invoices;
  }

  export function getInvoice(number) {
      return invoices.find(
          (invoice) => {
            return invoice.number === number
          }
      );
  }

  export function deleteInvoice(number){
      invoices = invoices.filter (
          (invoice) => invoice.number !== number
      );
  }


  export const qrCodes = [
    {
      id: 1,
      title: 'Monty Codigo Personal',
      codeValue: 'Montoya',
      description: 'Este codigo muestra el nombre clave del Agente Montoya'
    },
    {
      id: 2,
      title: 'Jose Codigo Personal',
      codeValue: 'JoZen',
      description: 'Este codigo muestra el nombre clave de Jose'
    }
  ]


  export const images = [
    {
      id: '01',
      src: 'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '02',
      src: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '03',
      src: 'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '04',
      src: 'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '05',
      src: 'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '06',
      src: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
      alt: 'Awesome watch',
    },
  ]
  
  export const products = [
    {
      id: '1',
      name: 'Bamboo Tan',
      currency: 'USD',
      price: 199,
      flag: 'new',
      imageUrl:
        'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '2',
      name: 'Iconic Turquoise',
      currency: 'USD',
      price: 199,
      salePrice: 179.99,
      flag: 'on-sale',
      imageUrl:
        'https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 12,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '3',
      name: 'Marble Leather',
      currency: 'USD',
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 12,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '4',
      name: 'Silve wolf',
      currency: 'GBP',
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80',
      rating: 5,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
  ]