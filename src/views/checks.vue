<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isCardModalActive = true">
            Manage Filters
        </button>
        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
             <header class="card-header">
                <p class="card-header-title">
                 Manage Filters 
                </p>
                <p class="button is-primary"  @click="isCardModalActive = false">close</p>
             </header>
               <div class="card-content">
                 <div class="content">
                    <div class="columns">
                        <div class="column is-9">
                          <b-field> 
                            <b-select placeholder="Select a character" expanded>
                                <option value="flint">Flint</option>
                                <option value="silver">Silver</option>
                            </b-select>
                           </b-field>
                        </div>
                        <div class="column is-2">
                            <b-field>
                                <b-select placeholder="Is">
                                    <option value="1">Is</option>
                                    <option value="2">Is-not</option>
                                </b-select>
                            </b-field>
                        </div>
                        <div class="column is-1">
                         <button class="button is-light">
                          <i class="far fa-trash-alt"></i>
                        </button>
                        </div>
                    </div>   
                   <div class="columns">
                       <div class="column is-11">
                          <b-field>
                            <b-input placeholder="Search..."
                             type="search"
                             icon="magnify"
                            >
                            </b-input>
                        </b-field>
                       </div>
                   </div>
                   <div class="columns">
                       <div class="column">
                          <p class="control">
                             <button class="button">Add Filter</button>
                          </p>
                       </div>
                   </div>
                   <hr>
                   <div class="columns">
                       <div class="column is-8">
                       </div>
                       <div class="column is-4">
                      <p class="control">
                        <button class="button">Cancel</button>&nbsp
                       <button class="button has-background-info">Add Filter</button>
                      </p>
                       </div>
                   </div>
                   </div>
               </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
    export default {
        data() {
            return {

                isCardModalActive: false,
                
            }
        },
        methods:{
            closed(){
                 this.$onCancel
            }
        }
    }
</script>
