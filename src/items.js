const allProducts = [
    {
      id: '1',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'shoes'
      
    },
    {
      id: '2',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'shoes'
    },
    {
      id: '3',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '4',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'dress'
    },
    {
      id: '5',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '6',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'dress'
    },
    {
      id: '7',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '8',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'dress'
    },
    {
      id: '9',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '10',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '11',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '12',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '13',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '14',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'shoes'
    },
    {
      id: '15',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'jacket'
    },
    {
      id: '16',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '17',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '18',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '19',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'jacket'
    },
    {
      id: '20',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '21',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '22',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '23',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'jacket'
    },
    {
      id: '24',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '25',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '26',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '27',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/08/a9/08a970929aab3848b6ea1019254e189d735a0d27.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/fullscreen]'],
      title: 'Shoes',
      price: '2000',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'a'
    },
    {
      id: '28',
      img: ['https://lp2.hm.com/hmgoepprod?set=source[/7d/3b/7d3b22088937d40e75c16456efc9ef2944519cde.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'],
      title: 'Dress',
      price: '2600',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'jacket'
    }
  ];

export default allProducts;