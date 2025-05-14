import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createSchedule } from '@/api/doctor/doctorServices.ts';
import { DoctorScheduleRequest } from '@/api/doctor/doctorTypes.ts';
import { useToast } from '@/context/ToastContext.tsx';
import { useAuth } from '@/context/AuthContext';

const daysOfWeek = [
  { value: 'MONDAY', label: 'Monday' },
  { value: 'TUESDAY', label: 'Tuesday' },
  { value: 'WEDNESDAY', label: 'Wednesday' },
  { value: 'THURSDAY', label: 'Thursday' },
  { value: 'FRIDAY', label: 'Friday' },
  { value: 'SATURDAY', label: 'Saturday' },
  { value: 'SUNDAY', label: 'Sunday' },
];

const CreateDoctorSchedule = () => {
  const { showToast } = useToast();
  const { user } = useAuth();
  const [form, setForm] = useState<DoctorScheduleRequest>({
    dayOfWeek: 'MONDAY',
    startTime: '',
    endTime: '',
  });

  const mutation = useMutation({
    mutationFn: (data: DoctorScheduleRequest) =>
      createSchedule(user?.id || '', data),
    onSuccess: () => {
      showToast('Schedule created successfully!', { type: 'success' });
      setForm({ dayOfWeek: 'MONDAY', startTime: '', endTime: '' });
    },
    onError: (error: unknown) => {
      const message =
        error && typeof error === 'object' && 'message' in error
          ? (error as { message?: string }).message
          : 'Failed to create schedule';
      showToast(message || 'Failed to create schedule', {
        type: 'error',
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Doctor Schedule
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Day of Week</label>
            <select
              name="dayOfWeek"
              value={form.dayOfWeek}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              {daysOfWeek.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">End Time</label>
            <input
              type="time"
              name="endTime"
              value={form.endTime}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Creating...' : 'Create Schedule'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDoctorSchedule;
