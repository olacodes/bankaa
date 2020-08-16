<template>
  <div class="trans-list-cont">
    <b-table
      :data="transaction"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      bordered=true
      striped=true
      hoverable=true
      default-sort-direction="desc"
      default-sort="transaction.date"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      class="table"
    >
      <template slot-scope="props">
        <b-table-column label="#" field="id" width="10" sortable numeric>
          {{ props.index + 1 }}
        </b-table-column>
        <!-- {{ props }} -->
        <b-table-column field="date" label="Date" sortable>
          {{ props.row.date }}
        </b-table-column>

        <b-table-column field="type" label="Type" sortable>
          {{ props.row.type }}
        </b-table-column>

        <b-table-column field="amount" label="Amount" sortable>
          {{ props.row.amount }}
        </b-table-column>

        <b-table-column field="balance" label="Balance">
          {{ props.row.balance }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    transaction: {
      type: Array,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isPaginated: true,
      sortIcon: 'arrow-up',
      paginationPosition: 'bottom',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 3,
    }
  },
}
</script>

<style scoped>
.table{
  /* border: 2px solid; */
  padding: 2rem 1rem 0 1rem;
  border-radius: 1rem;
}
</style>
