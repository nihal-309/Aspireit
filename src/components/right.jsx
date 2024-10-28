import IMG1 from '../assets/icon1.png';
import IMG2 from '../assets/icon2.png';
import IMG3 from '../assets/icon3.png';
import IMG4 from '../assets/search.png';
import IMG5 from '../assets/dots.png';
import IMG6 from '../assets/export.png';
import IMG7 from '../assets/paypal.png';
import IMG8 from '../assets/wallet.png';
import IMG9 from '../assets/card.png';
import IMG10 from '../assets/gpay.png';
import IMG11 from '../assets/burger.png';
import Left from './sideBar.jsx';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Line} from 'recharts';
import { AreaChart, YAxis, Tooltip, Area, BarChart, Bar} from 'recharts'; // Replace with appropriate imports
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Map from './map';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ModeBtn from './Mode_btn1';

const Right = () =>{
    const data = [
        { name: 'Group A', value: 700 },
        { name: 'Group B', value: 300 }
      ];
    const COLORS = ['#5351fb', '#00eed1'];
    const [display, setDisplay] = useState(false);

    const DraggableBox = ({ id, index, moveBox, children }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: ItemTypes.BOX,
            item: { id, index },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));
    
        const [, drop] = useDrop(() => ({
            accept: ItemTypes.BOX,
            hover: (draggedItem) => {
                if (draggedItem.index !== index) {
                    moveBox(draggedItem.index, index);
                    draggedItem.index = index;
                }
            },
        }));
    
        return (
            <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
                {children}
            </div>
        );
    };

    const [boxes, setBoxes] = useState([
        { id: 'box1', content: 'Sales Overview' },
        { id: 'box2', content: 'Yearly Sales' },
        { id: 'box3', content: 'Revenue Updates' },
    ]);

    const ItemTypes = {
        BOX: 'box',
    };    

    const renderLegend = (props) => {
        const { payload } = props;
        return (
            <ul style={{ width: 'fit-content' }} className="flex flex-wrap inline-block flex-col relative left-[67%] bottom-[20px] gap-6">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center mr-4 inline-block">
                        <svg className="w-4 h-4 mr-2">
                            <circle cx="8" cy="8" r="6" stroke={entry.color} fill="none" strokeWidth="2" />
                        </svg>
                        <span>
                            $23,450 <br />{index === 0 ? 'Profit' : 'Expanse'}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    const renderLegend1 = (props) => {
        const { payload } = props;
        return (
            <ul style={{ width: 'fit-content' }} className="flex flex-wrap gap-6 mt-16 mx-auto">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center mr-4">
                        <svg className="w-4 h-4 mr-2">
                            <circle cx="8" cy="8" r="6" stroke={entry.color} fill="none" strokeWidth="2" />
                        </svg>
                        <span>
                            {index === 0 ? '$5476' : '$4476'} <br /><span style={{color: 'grey'}}>{index === 0 ? '2023' : '2022'}</span>
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    const data3 = [
        { name: 'Page A', pv: 40, uv: 4000 },
        { name: 'Page B', pv: 60, uv: 3000 },
        { name: 'Page C', pv: 30, uv: 2000 },
        { name: 'Page D', pv: 70, uv: 2780 },
        { name: 'Page E', pv: 40, uv: 1890 },
        { name: 'Page F', pv: 50, uv: 2390 },
        { name: 'Page G', pv: 30, uv: 3490 },
    ];

    const data1 = [
        { x: '2023-10-01', y: 1507.2 },
        { x: '2023-10-02', y: 2512 },
        { x: '2023-10-03', y: 2260.8 },
        { x: '2023-10-04', y: 3516.8 },
        { x: '2023-10-06', y: 2739.2 },
        { x: '2023-10-08', y: 5476 },
        { x: '2023-10-10', y: 2804 },
        { x: '2023-10-11', y: 4024 },
        { x: '2023-10-12', y: 2008 },
        { x: '2023-10-13', y: 4024 },
    ];
      
    const data2 = [
        { x: '2023-10-01', y1: 497.3 },
        { x: '2023-10-02', y1: 1492 },
        { x: '2023-10-03', y1: 1243 },
        { x: '2023-10-04', y1: 2486 },
        { x: '2023-10-06', y1: 1740.6 },
        { x: '2023-10-08', y1: 4476 },
        { x: '2023-10-10', y1: 1513.3 },
        { x: '2023-10-11', y1: 3062.6 },
        { x: '2023-10-12', y1: 891.3 },
        { x: '2023-10-13', y1: 2678 },
    ];

    const moveBox = (fromIndex, toIndex) => {
        const updatedBoxes = [...boxes];
        const [movedBox] = updatedBoxes.splice(fromIndex, 1);
        updatedBoxes.splice(toIndex, 0, movedBox);
        setBoxes(updatedBoxes);
    };

    const markerData = [
        { lat: 51.505, lng: -0.09, popup: 'Marker 1' },
        { lat: 48.8566, lng: 2.3522, popup: 'Marker 2' },
        { lat: 40.7128, lng: -74.0060, popup: 'Marker 3' },
    ];

    const exportMarkerData = () => {
        const dataStr = JSON.stringify(markerData, null, 2);
        const blob = new Blob([dataStr], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'markerData.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [chartWidth, setChartWidth] = useState(280);
    const [pieCenter, setPieCenter] = useState(70);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setChartWidth(window.innerWidth * 0.7); // Small screen size                
            } else if (window.innerWidth < 768 && window.innerWidth > 640) {
                setChartWidth(400); // Medium screen size
            } else {
                setChartWidth(280); // Default size
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call handler right away so state gets updated with initial window size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setPieCenter(75); // Small screen size
            } else if (window.innerWidth < 768 && window.innerWidth > 640) {
                setPieCenter(130); // Medium screen size
            }else if (window.innerWidth < 1240 && window.innerWidth > 768) {
                setPieCenter(90); // Medium screen size
            } else {
                setPieCenter(100); // Default size
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call handler right away so state gets updated with initial window size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleClick() {
        setDisplay(prevDisplay => !prevDisplay);
        console.log(display);
        
    }
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const { ref: cardRef, inView: cardInView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    return(
        <div style={{fontFamily: 'satoshi'}} className="Right w-[85.7vw] max-md:w-[100vw]">
            <div className="head flex justify-between py-2 px-4">
                <div className="topLeft flex gap-4 items-center">
                    <p className='font-medium text-[30px] max-md:text-[20px]'>Dashboard</p>
                    <div className="search flex items-center">
                        <input className='py-2 pl-8 bg-[#edeef2] max-sm:hidden rounded-[5px] w-[300px] max-md:w-[250px] max-md:text-[20px]' type="text" placeholder='Search...' />
                        <img className='relative right-[293px] max-md:right-[243px] w-[20px] max-md:w-[15px]' src={IMG4} alt="" />
                    </div>
                </div>
                <div className="icons flex items-center gap-4">
                    {/* <ModeBtn /> */}
                    <div className="bg p-2 bg-[#f6f9fb] rounded-full hover:cursor-pointer max-xs:hidden">
                        <img className='w-[30px] max-md:w-[20px]'  src={IMG1} alt="" />
                    </div>
                    <div className="bg p-2 bg-[#f6f9fb] rounded-full hover:cursor-pointer max-xs:hidden">
                        <img className='w-[30px] max-md:w-[20px]' src={IMG2} alt="" />
                    </div>
                    <div className="bg p-2 bg-[#f6f9fb] rounded-full hover:cursor-pointer max-xs:hidden">
                        <img className='w-[30px] max-md:w-[20px]' src={IMG3} alt="" />
                    </div>
                    <div className="bg p-2 bg-[#f6f9fb] rounded-full hidden max-md:block hover:cursor-pointer">
                        <img className='w-[30px] max-md:w-[20px]' onClick={handleClick} src={IMG11} alt="" />
                    </div>
                </div>
            </div>
            <div style={{display: display ? 'block' : 'none'}} className="sideBar absolute fixed right-0">
                <Left />
            </div>
            <div className="bottom w-full bg-[#f7f8fa] pt-12">
                <motion.div
                    className="bubble"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                >
                <div style={{boxShadow:"4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"}} className="sales w-[76vw] max-md:w-[90vw] bg-[#e8efff] mx-auto mb-4 p-6 rounded-[15px] flex-wrap">
                    <p className='text-[32px] font-medium'>Sales Distribution</p>
                    <p>This is all over Platform Sales Generated</p>
                    <div className="flex mt-4 justify-between flex-wrap max-lg:justify-center max-lg:gap-4 max-md:mx-auto">
                        <div className="bubble px-4 py-6 bg-white rounded-[15px]">
                            <p className='text-[32px] font-semibold tracking-[0.07em]'>$34,343.00</p>
                            <p className='text-[#88898f]'>Total Sales</p>
                        </div>
                        <div className="bubble px-4 py-6 bg-white rounded-[15px]">
                            <p className='text-[32px] font-semibold tracking-[0.07em]'>$4.5k<span className='text-[15px] font-normal inline-block tracking-normal'>(40%)</span></p>
                            <p className='text-[#88898f]'>By Website</p>
                        </div>
                        <div className="bubble px-4 py-6 bg-white rounded-[15px]">
                            <p className='text-[32px] font-semibold tracking-[0.07em]'>$2.8k<span className='text-[15px] font-normal inline-block tracking-normal'>(25%)</span></p>
                            <p className='text-[#88898f]'>By Mobile</p>
                        </div>
                        <div className="bubble px-4 py-6 bg-white rounded-[15px]">
                            <p className='text-[32px] font-semibold tracking-[0.07em]'>$2.2k<span className='text-[15px] font-normal inline-block tracking-normal'>(20%)</span></p>
                            <p className='text-[#88898f]'>By Market</p>
                        </div>
                        <div className="bubble px-4 py-6 bg-white rounded-[15px] max-xl:mt-4 max-lg:mt-0">
                            <p className='text-[32px] font-semibold tracking-[0.07em]'>$1.7k<span className='text-[15px] font-normal inline-block tracking-normal'>(15%)</span></p>
                            <p className='text-[#88898f]'>By Agent</p>
                        </div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                    className="bubble"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                >
                <DndProvider backend={HTML5Backend}>
                    <div className="flex mx-auto w-[76.9vw] max-md:w-[90vw] flex-wrap max-xl:justify-center">
                        {boxes.map((box, index) => (
                            <DraggableBox key={box.id} id={box.id} index={index} moveBox={moveBox}>
                                {box.id === 'box1' && (
                                    <div style={{ boxShadow: "4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)" }} className="pie bg-white m-2 px-4 py-8 rounded-[15px]">
                                        <p className='text-[32px] font-medium max-md:text-center'>{box.content}</p>
                                        <PieChart width={chartWidth} height={200} radius={[10,10]}>
                                            <text x={pieCenter+5} y={105} textAnchor="middle" dominantBaseline="middle">
                                                $500,000
                                            </text>
                                            <Pie
                                                data={data}
                                                cx={pieCenter}
                                                cy={100}
                                                innerRadius={55}
                                                outerRadius={75}
                                                fill="#8884d8"
                                                paddingAngle={10}
                                                dataKey="value"
                                                cornerRadius={10}
                                                stroke="#fff"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Legend verticalAlign="bottom" align="left" content={renderLegend} />
                                            <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
                                            <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </PieChart>
                                        <div className="dots bg-[#f4f6fa] w-fit ] relative bottom-[80%] left-[90%] p-2 rounded-full cursor-grab">
                                            <img className='w-[20px]' src={IMG5} alt="" />
                                        </div>
                                    </div>
                                )}
                                {box.id === 'box2' && (
                                    <div style={{ boxShadow: "4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)" }} className="bar bg-white m-2 px-4 py-6 rounded-[15px]">
                                        <p className='text-[32px] font-medium mb-4 max-md:text-center'>{box.content}</p>
                                        <BarChart width={chartWidth} height={200} data={data3}>
                                            <defs>
                                                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                                                    <stop offset="0%" stopColor="#5051fa" stopOpacity={0.3} />
                                                    <stop offset="50%" stopColor="#5051fa" stopOpacity={1} />
                                                    <stop offset="100%" stopColor="#5051fa" stopOpacity={0.3} />
                                                </linearGradient>
                                            </defs>
                                            <Tooltip cursor={{ fill: 'transparent' }} />
                                            <YAxis domain={[0, 'auto']} tickLine={false} axisLine={false} />
                                            <Bar dataKey="pv" fill="#5051fa" barSize={15} radius={[10, 10, 10, 10]} />
                                        </BarChart>
                                        <div className="dots bg-[#f4f6fa] w-fit relative bottom-[87%] left-[90%] p-2 rounded-full cursor-grab">
                                            <img className='w-[20px]' src={IMG5} alt="" />
                                        </div>
                                    </div>
                                )}
                                {box.id === 'box3' && (
                                    <div style={{ boxShadow: "4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)" }} className="pie bg-white m-2 px-4 py-6 rounded-[15px]">
                                        <p className='text-[32px] font-medium mb-4 max-md:text-center'>{box.content}</p>
                                        <AreaChart width={chartWidth} height={200} data={data1}>
                                            <YAxis domain={[0, 'auto']} hide />
                                            <Tooltip />
                                            <Legend verticalAlign="bottom" align="left" content={renderLegend1} />
                                            <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
                                            <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
                                            <Area
                                                type="monotone"
                                                dataKey="y"
                                                fill="none"
                                                stroke="#5d59f8"
                                                strokeWidth={5} // Increase the stroke thickness
                                            />
                                            <defs>
                                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#b9e6ff" stopOpacity={1} /> {/* Transparent color at the top */}
                                                    <stop offset="10%" stopColor="#b9e6ff" stopOpacity={1} /> {/* Slightly opaque color */}
                                                    <stop offset="50%" stopColor="#b9e6ff" stopOpacity={1} />
                                                    <stop offset="95%" stopColor="#a8dffe" stopOpacity={1} /> {/* Desired fill color */}
                                                </linearGradient>
                                            </defs>
                                            <Area
                                                type="monotone"
                                                dataKey="y1"
                                                data={data2} // Use data for the second area graph
                                                fill="url(#colorPv)" // Use the gradient fill
                                                stroke="#b9e6ff"
                                                strokeWidth={0} // Increase the stroke thickness
                                            />
                                        </AreaChart>
                                        <div className="dots bg-[#f4f6fa] w-fit relative bottom-[87%] left-[90%] p-2 rounded-full cursor-grab">
                                            <img className='w-[20px]' src={IMG5} alt="" />
                                        </div>
                                    </div>
                                )}
                            </DraggableBox>
                        ))}
                    </div>
                </DndProvider>
                </motion.div>
                <div className="map flex w-[77vw] mx-auto max-md:w-[90vw] flex-wrap max-xl:justify-center">
                    <motion.div
                        className="bubble"
                        ref={cardRef}
                        initial="hidden"
                        animate={cardInView ? "visible" : "hidden"}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                    <div style={{boxShadow:"4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"}} className="mapp max-xl:w-[80vw] w-[45vw] bg-white  m-2 px-6 py-6 rounded-[15px]">
                        <div className="desc flex max-sm:flex-col justify-between">
                            <div className="leftt mb-2">
                                <p className='text-[32px] font-medium'>Active User</p>
                                <p><span className='text-[#6267f5] mr-1'>8.06%</span> Vs. previous month</p>
                            </div>
                            <div className="rightt flex items-center gap-2 max-sm:my-2">
                                <div className="bg p-3 bg-[#f6f9fb] rounded-full hover:cursor-pointer">
                                    <img onClick={exportMarkerData} className='w-[20px] cursor-pointer' src={IMG6} alt="" />
                                </div>
                                <p  className='text-[20px] font-medium'>Export</p>
                            </div>
                        </div>
                        <Map data={markerData}/>

                    </div>
                    </motion.div>
                    <motion.div
                        className="bubble"
                        ref={cardRef}
                        initial="hidden"
                        animate={cardInView ? "visible" : "hidden"}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                    <div style={{boxShadow:"4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"}} className="payment bg-white m-2 px-6 py-6 rounded-[15px] ml-4">
                        <div className="top mb-6">
                            <p className='text-[27px] font-medium'>Payment Gateways</p>
                        </div>
                        <div className="card flex items-center justify-between mt-4">
                            <div className="left flex items-center gap-3">
                                <div className="p-3 bg-[#ff5174] rounded-full">
                                    <img className='w-[20px]' src={IMG7} alt="" />
                                </div>
                                <div className="desc">
                                    <p className='text-[15px]'>Paypal</p>
                                    <p className='text-[12px] text-gray-500'>Big Brands</p>
                                </div>
                            </div>
                            <div className="amount">
                                <p className='text-[12px]'>+$6235</p>
                            </div>
                        </div>

                        <div className="card flex items-center justify-between mt-8">
                            <div className="left flex items-center gap-3">
                                <div className="p-3 bg-[#fbb55d] rounded-full">
                                    <img className='w-[20px]' src={IMG8} alt="" />
                                </div>
                                <div className="desc">
                                    <p className='text-[15px]'>Wallet</p>
                                    <p className='text-[12px] text-gray-500'>Bill Payment</p>
                                </div>
                            </div>
                            <div className="amount">
                                <p className='text-[12px]'>-$235</p>
                            </div>
                        </div>

                        <div className="card flex items-center justify-between mt-8">
                            <div className="left flex items-center gap-3">
                                <div className="p-3 bg-[#4277fe] rounded-full">
                                    <img className='w-[20px]' src={IMG9} alt="" />
                                </div>
                                <div className="desc">
                                    <p className='text-[15px]'>Credit Card</p>
                                    <p className='text-[12px] text-gray-500'>Bill Payment</p>
                                </div>
                            </div>
                            <div className="amount">
                                <p className='text-[12px]'>+$2235</p>
                            </div>
                        </div>

                        <div className="card flex items-center justify-between mt-8">
                            <div className="left flex items-center gap-3">
                                <div className="p-3 bg-green-500 rounded-full">
                                    <img className='w-[20px]' src={IMG10} alt="" />
                                </div>
                                <div className="desc">
                                    <p className='text-[15px]'>Crypto</p>
                                    <p className='text-[12px] text-gray-500'>Bill Payment</p>
                                </div>
                            </div>
                            <div className="amount">
                                <p className='text-[12px]'>+$66235</p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
)}

export default Right;