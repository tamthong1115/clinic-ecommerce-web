import { Link, useParams, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { GrSchedulePlay } from 'react-icons/gr';
import { DoctorSearchResponse } from '@/api/doctor/doctorTypes';
import { searchDoctors } from '@/api/doctor/doctorServices';
import { useEffect, useState } from 'react';
import { getServiceById } from '@/api/public/service/servicePublicService';

interface Service {
  id: string;
  serviceName: string;
  description?: string;
  price?: number;
}

const DoctorsByService = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState<DoctorSearchResponse[]>([]);
  const [selectedDates, setSelectedDates] = useState<Record<string, string>>(
    {}
  );
  const [service, setService] = useState<Service | null>(
    location.state?.service || null
  );

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const result = await searchDoctors({ serviceId });
        setDoctors(result.content);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };

    fetchDoctors();
  }, [serviceId]);

  // Fallback: fetch service if not passed via state
  useEffect(() => {
    if (!service && serviceId) {
      getServiceById(serviceId)
        .then(setService)
        .catch((error) => console.error('Failed to fetch service:', error));
    }
  }, [service, serviceId]);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto p-6">
        {/* Service Information */}
        {service && (
          <div className="mb-6 p-4 bg-white rounded shadow">
            <h1 className="text-2xl font-bold text-teal-600">
              {service.serviceName}
            </h1>
            <p className="text-gray-700 mt-2">{service.description}</p>
            <p className="text-blue-600 font-medium mt-2">
              Giá: {service.price?.toLocaleString()} VNĐ
            </p>
          </div>
        )}

        {/* Doctors List */}
        <div className="w-full h-full flex flex-col justify-center items-center mx-auto container border-1 p-[10px]">
          {doctors.map((item, index) => {
            const doctorId = item.id;
            const availableDates = Array.from(
              new Set(item.schedules?.map((s) => s.date) || [])
            );
            const selectedDate = selectedDates[doctorId] || availableDates[0];

            return (
              <div
                key={index}
                className="w-[80%] h-full flex flex-col justify-center items-center bg-white mb-2 rounded-lg"
              >
                <div className="text-white bg-emerald-600 p-1 w-full text-left mb-2">
                  Dịch vụ đã đặt:{' '}
                  {item.services?.map((service) => service.name).join(', ')}
                </div>

                <div className="w-full flex flex-row jus-center item-center p-4">
                  <div className="w-[150px] h-[100px] pr-[15px]">
                    <img
                      src={item.profilePicture || logo}
                      className="object-cover w-full h-full rounded-[10px]"
                    />
                  </div>
                  <div>
                    <div className="text-[#41d6e7] font-[700] text-[18px] mb-[2px] hover:text-[#1c919e]">
                      <Link to={`/booking/detail/${item.id}`}>
                        {item.firstName} {item.lastName}
                      </Link>
                    </div>
                    <div className="mb-[5px]">
                      <div className="font-[700]">Học vấn:</div>
                      <div className="text-[14px] opacity-70">
                        - {item.education}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-[5px] text-[18px]">
                      <GrSchedulePlay />
                    </div>
                    <div className="text-[18px] font-[500]">
                      Lịch Khám (tối đa 7 ngày):
                    </div>
                  </div>

                  {/* 🔽 Per-doctor date selector */}
                  {availableDates.length > 0 && (
                    <div className="mb-2">
                      <label className="font-bold mr-2">Chọn ngày:</label>
                      <select
                        className="p-1 rounded border"
                        value={selectedDate}
                        onChange={(e) =>
                          setSelectedDates({
                            ...selectedDates,
                            [doctorId]: e.target.value,
                          })
                        }
                      >
                        {availableDates.map((date, i) => (
                          <option key={i} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-[8px] my-[10px] border-b-2 border-gray-200 pb-[10px]">
                    {item.schedules
                      ?.filter((sch) => sch.date === selectedDate)
                      .map((sch, idx) => (
                        <div
                          key={idx}
                          className={`p-2 text-center text-[14px] h-[41px] font-[500] transition ${
                            sch.booked
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700 hover:scale-105'
                          }`}
                          onClick={() => {
                            if (!sch.booked) {
                              navigate('/create-appointment', {
                                state: {
                                  doctorId: item.id,
                                  clinicId: item.clinic?.id,
                                  appointmentDate: sch.date,
                                  startTime: sch.startTime,
                                  endTime: sch.endTime,
                                  doctor: item,
                                  service: service,
                                },
                              });
                            }
                          }}
                        >
                          {sch.startTime} - {sch.endTime}
                        </div>
                      ))}
                  </div>

                  <div className="pb-[10px] border-b-2 border-gray-200">
                    <div className="font-[700] ">Địa chỉ khám:</div>
                    <div className="text-[#20a2b0] font-[700]">
                      {item.clinic?.name}
                    </div>
                    <div className="">{item.clinic?.address}</div>
                  </div>

                  <div className="mt-4 flex flex-col justify-center items-center">
                    <span className="text-[18px] font-[500]">
                      Giá trung bình:{' '}
                      {new Intl.NumberFormat('vi-VN').format(
                        item.services?.[0]?.price || 0
                      )}{' '}
                      VND
                    </span>
                    <span className="text-[17px] cursor-pointer text-[#20a2b0]">
                      Xem chi tiết...
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorsByService;
