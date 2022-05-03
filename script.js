$(document).ready( () => {
    $('.hasil').hide()
    let  listBilanganUrut = []
    let listBilangan = [];
    
    
    function inputBilangan() {
        listBilangan.push(Number($('#input-angka').val()));
        listBilanganUrut.push(Number($('#input-angka').val()))
        listBilanganUrut.sort( function (a, b) { return a-b })
        $('.data-angka').text(listBilangan)
        $('#input-angka').val('')
        
    }

    function mean() {
        let total = 0;
        for (let i = 0; i < listBilanganUrut.length; i++) {
            total += listBilanganUrut[i];
        }
        return total / listBilanganUrut.length;
        // console.log(mean)
    }

    function modus() {
        var obj_count = {};
        var modus = listBilangan[0], maxCount = 1;
        for(var i = 0; i < listBilangan.length; i++)
        {
            var el = listBilangan[i];
            // apakah elemen array ada di dalam object_count?
            if(obj_count[el] == null)
                obj_count[el] = 1 
            else obj_count[el]++;

            // apakah object count dengan key elemen array lebih besar dari maxcount jika iya maka modus akan di isi elemen array dan maxcount isinya akan diupdate menjadi object count yang key nya adalah eleme dalam array
            if(obj_count[el] > maxCount)
            {
                modus = el;
                maxCount = obj_count[el];
            }
        }
        return modus
    }
    
    $('#tambah').click( () => {
        if ($('#input-angka').val() != '') {
            inputBilangan()
            
            $('.hasil').html(
                `<div class="container">
                    <div class="row mt-2 gap-3">
                        <div class="col-md-12 card card-body bg-light bg-opacity-50">
                            Bilangan Setelah diurutkan : 
                            <h5 class="mt-1">`+  listBilanganUrut +`</h5>
                        </div>
                        <div class="col-md-2 card card-body bg-danger text-white">
                            MEAN
                            <h2>`+ mean().toFixed(2) +`</h2>
                        </div>
                        <div class="col-md-2 card card-body bg-success text-white">
                            MODUS
                            <h2>`+ modus() +`</h2>
                        </div>
                        <div class="col-md-2 card card-body bg-dark text-white">
                            MAX
                            <h2>`+ listBilanganUrut[listBilanganUrut.length-1] +`</h2>
                        </div>
                        <div class="col-md-2 card card-body bg-primary text-white">
                            MIN
                            <h2>`+ listBilanganUrut[0] +`</h2>
                        </div>
                    </div>
                </div>`
            )

            $('.hasil').slideDown()
        }
        else{
            $('.hasil').html('Tolong Masukan Angka')
            $('.hasil').fadeIn()
            setTimeout(() => {
                $('.hasil').fadeOut()
            }, 2000);
        }
        
    })

    $('#reset').click(()=>{
        $('#input-angka').attr('autofocus','true');
        listBilangan = []
        listBilanganUrut = []
        $('.data-angka').text('Belum Ada Bilangan');
        $('.hasil').slideUp()
    })
})