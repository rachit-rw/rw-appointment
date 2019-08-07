import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appointments: [
      {
        title: 'Appointment about my projection',
        status: 'Pending',
        time: moment(),
        live: false
      },
      {
        title: 'Appointment about my goals',
        status: 'Scheduled',
        time: moment(),
        live: false
      },
      {
        title: 'Appointment about my cashflow',
        status: 'Scheduled',
        time: moment(),
        live: true
      },
      {
        title: 'Appointment about my projection',
        status: 'Expired',
        time: moment(),
        live: false
      },
      {
        title: 'Appointment about nothing',
        status: 'Rejected',
        time: moment(),
        live: false
      }
    ]
  },
  mutations: {
    BOOK_APPOINTMENT(state, payload) {
      state.appointments.push(payload);
    },
    UPDATE_APPOINTMENTS(state, payload) {
      state.appointments = payload;
    }
  },
  actions: {
    bookAppointment({ commit }, payload) {
      
      commit('BOOK_APPOINTMENT', {
        title: payload.title,
        time: moment(moment().format('YYYY-MM-DD') + ' ' + payload.timing),
        status: 'Pending',
        live: false
      });
    },
    appointmentAccept({ commit, state }, index) {
      let { appointments } = state;
      
      appointments[index].status = 'Scheduled';
      commit('UPDATE_APPOINTMENTS', appointments);
    },
    appointmentReject({ commit, state }, index) {
      let { appointments } = state;
      
      appointments[index].status = 'Rejected';
      commit('UPDATE_APPOINTMENTS', appointments);
    }
  }
})
